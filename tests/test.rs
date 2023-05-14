
use easy_fs::{BlockDevice, EasyFileSystem};
use std::fs::{File, OpenOptions};
use std::io::{Read, Seek, SeekFrom, Write};
use std::sync::{Arc, Mutex};

/// Use a block size of 512 bytes
const BLOCK_SZ: usize = 512;
const BLOCK_NUM: usize = 131072; //64*2048

/// Wrapper for turning a File into a BlockDevice
struct BlockFile(Mutex<File>);

impl BlockDevice for BlockFile {
    /// Read a block from file
    fn read_block(&self, block_id: usize, buf: &mut [u8]) {
        let mut file = self.0.lock().unwrap();
        file.seek(SeekFrom::Start((block_id * BLOCK_SZ) as u64))
            .expect("Error when seeking!");
        assert_eq!(file.read(buf).unwrap(), BLOCK_SZ, "Not a complete block!");
    }
    /// Write a block into file
    fn write_block(&self, block_id: usize, buf: &[u8]) {
        let mut file = self.0.lock().unwrap();
        file.seek(SeekFrom::Start((block_id * BLOCK_SZ) as u64))
            .expect("Error when seeking!");
        assert_eq!(file.write(buf).unwrap(), BLOCK_SZ, "Not a complete block!");
    }
}

#[test]
fn test_efs_vfs() -> std::io::Result<()> {
    let block_file = Arc::new(BlockFile(Mutex::new({
        let f = OpenOptions::new()
            .read(true)
            .write(true)
            .create(true)
            .open("target/fs.img")?;
        f.set_len((BLOCK_NUM * BLOCK_SZ) as u64).unwrap();
        f
    })));

    let _efs1 = EasyFileSystem::create(block_file.clone()
    ,4096*32
    , 1);
    let efs = EasyFileSystem::open(block_file.clone());
    //创建目录
    let root_inode = EasyFileSystem::root_inode(&efs);
    //创建文件
    root_inode.create("filea");
    root_inode.create("fileb");
    root_inode.create("filec");
    let dir = root_inode.readdir();
    assert_eq!(dir, ["filea","fileb","filec"]);

    // 找到filea文件，并向其中写和从中读数据到缓冲区
    let filea = root_inode.find("filea").unwrap();
    let greet_str = "Hello, world!";
    filea.write_at(0, greet_str.as_bytes());
    let mut buffer = [0u8; 233];
    let len = filea.read_at(0, &mut buffer);
    assert_eq!(greet_str, core::str::from_utf8(&buffer[..len]).unwrap(),);

    filea.clear();
    assert_eq!(filea.read_at(0, &mut buffer), 0,);

    Ok(())
}





// const ARR:[u8; 5] = [1,2,5,1,4];
// use easy_fs::{UserBuffer, OpenFlags, FileHandle};
// #[test]
// fn test_file() -> std::io::Result<()> {
//     let mut a = [1,2,5,1,4];
//     let b = &'static mut ARR[..3];
//     let buffers = vec![b];
//     UserBuffer::new(buffers);
//     Ok(())
// }
