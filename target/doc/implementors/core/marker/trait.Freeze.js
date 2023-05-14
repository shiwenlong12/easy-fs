(function() {var implementors = {
"easy_fs":[["impl Freeze for <a class=\"struct\" href=\"easy_fs/struct.EasyFileSystem.html\" title=\"struct easy_fs::EasyFileSystem\">EasyFileSystem</a>",1,["easy_fs::efs::EasyFileSystem"]],["impl Freeze for <a class=\"struct\" href=\"easy_fs/struct.UserBuffer.html\" title=\"struct easy_fs::UserBuffer\">UserBuffer</a>",1,["easy_fs::file::UserBuffer"]],["impl Freeze for <a class=\"struct\" href=\"easy_fs/struct.OpenFlags.html\" title=\"struct easy_fs::OpenFlags\">OpenFlags</a>",1,["easy_fs::file::OpenFlags"]],["impl Freeze for <a class=\"struct\" href=\"easy_fs/struct.FileHandle.html\" title=\"struct easy_fs::FileHandle\">FileHandle</a>",1,["easy_fs::file::FileHandle"]],["impl Freeze for <a class=\"struct\" href=\"easy_fs/struct.Inode.html\" title=\"struct easy_fs::Inode\">Inode</a>",1,["easy_fs::vfs::Inode"]]],
"log":[["impl Freeze for <a class=\"enum\" href=\"log/enum.Level.html\" title=\"enum log::Level\">Level</a>",1,["log::Level"]],["impl Freeze for <a class=\"enum\" href=\"log/enum.LevelFilter.html\" title=\"enum log::LevelFilter\">LevelFilter</a>",1,["log::LevelFilter"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"log/struct.Record.html\" title=\"struct log::Record\">Record</a>&lt;'a&gt;",1,["log::Record"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"log/struct.RecordBuilder.html\" title=\"struct log::RecordBuilder\">RecordBuilder</a>&lt;'a&gt;",1,["log::RecordBuilder"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"log/struct.Metadata.html\" title=\"struct log::Metadata\">Metadata</a>&lt;'a&gt;",1,["log::Metadata"]],["impl&lt;'a&gt; Freeze for <a class=\"struct\" href=\"log/struct.MetadataBuilder.html\" title=\"struct log::MetadataBuilder\">MetadataBuilder</a>&lt;'a&gt;",1,["log::MetadataBuilder"]],["impl Freeze for <a class=\"struct\" href=\"log/struct.SetLoggerError.html\" title=\"struct log::SetLoggerError\">SetLoggerError</a>",1,["log::SetLoggerError"]],["impl Freeze for <a class=\"struct\" href=\"log/struct.ParseLevelError.html\" title=\"struct log::ParseLevelError\">ParseLevelError</a>",1,["log::ParseLevelError"]]],
"spin":[["impl !Freeze for <a class=\"struct\" href=\"spin/barrier/struct.Barrier.html\" title=\"struct spin::barrier::Barrier\">Barrier</a>",1,["spin::barrier::Barrier"]],["impl Freeze for <a class=\"struct\" href=\"spin/barrier/struct.BarrierWaitResult.html\" title=\"struct spin::barrier::BarrierWaitResult\">BarrierWaitResult</a>",1,["spin::barrier::BarrierWaitResult"]],["impl&lt;T, F&nbsp;=&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/core/primitive.fn.html\">fn</a>() -&gt; T&gt; !Freeze for <a class=\"struct\" href=\"spin/lazy/struct.Lazy.html\" title=\"struct spin::lazy::Lazy\">Lazy</a>&lt;T, F&gt;",1,["spin::lazy::Lazy"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"spin/mutex/struct.SpinMutex.html\" title=\"struct spin::mutex::SpinMutex\">SpinMutex</a>&lt;T&gt;",1,["spin::mutex::spin::SpinMutex"]],["impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spin/mutex/struct.SpinMutexGuard.html\" title=\"struct spin::mutex::SpinMutexGuard\">SpinMutexGuard</a>&lt;'a, T&gt;",1,["spin::mutex::spin::SpinMutexGuard"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"spin/mutex/struct.TicketMutex.html\" title=\"struct spin::mutex::TicketMutex\">TicketMutex</a>&lt;T&gt;",1,["spin::mutex::ticket::TicketMutex"]],["impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spin/mutex/struct.TicketMutexGuard.html\" title=\"struct spin::mutex::TicketMutexGuard\">TicketMutexGuard</a>&lt;'a, T&gt;",1,["spin::mutex::ticket::TicketMutexGuard"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"spin/mutex/struct.Mutex.html\" title=\"struct spin::mutex::Mutex\">Mutex</a>&lt;T&gt;",1,["spin::mutex::Mutex"]],["impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spin/mutex/struct.MutexGuard.html\" title=\"struct spin::mutex::MutexGuard\">MutexGuard</a>&lt;'a, T&gt;",1,["spin::mutex::MutexGuard"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"spin/once/struct.Once.html\" title=\"struct spin::once::Once\">Once</a>&lt;T&gt;",1,["spin::once::Once"]],["impl&lt;T&gt; !Freeze for <a class=\"struct\" href=\"spin/rw_lock/struct.RwLock.html\" title=\"struct spin::rw_lock::RwLock\">RwLock</a>&lt;T&gt;",1,["spin::rw_lock::RwLock"]],["impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spin/rw_lock/struct.RwLockReadGuard.html\" title=\"struct spin::rw_lock::RwLockReadGuard\">RwLockReadGuard</a>&lt;'a, T&gt;",1,["spin::rw_lock::RwLockReadGuard"]],["impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spin/rw_lock/struct.RwLockWriteGuard.html\" title=\"struct spin::rw_lock::RwLockWriteGuard\">RwLockWriteGuard</a>&lt;'a, T&gt;",1,["spin::rw_lock::RwLockWriteGuard"]],["impl&lt;'a, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; Freeze for <a class=\"struct\" href=\"spin/rw_lock/struct.RwLockUpgradableGuard.html\" title=\"struct spin::rw_lock::RwLockUpgradableGuard\">RwLockUpgradableGuard</a>&lt;'a, T&gt;",1,["spin::rw_lock::RwLockUpgradableGuard"]]],
"virtio_drivers":[["impl&lt;'a, H&gt; Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.VirtIOBlk.html\" title=\"struct virtio_drivers::VirtIOBlk\">VirtIOBlk</a>&lt;'a, H&gt;",1,["virtio_drivers::blk::VirtIOBlk"]],["impl Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.BlkResp.html\" title=\"struct virtio_drivers::BlkResp\">BlkResp</a>",1,["virtio_drivers::blk::BlkResp"]],["impl Freeze for <a class=\"enum\" href=\"virtio_drivers/enum.RespStatus.html\" title=\"enum virtio_drivers::RespStatus\">RespStatus</a>",1,["virtio_drivers::blk::RespStatus"]],["impl&lt;'a, H&gt; Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.VirtIOConsole.html\" title=\"struct virtio_drivers::VirtIOConsole\">VirtIOConsole</a>&lt;'a, H&gt;",1,["virtio_drivers::console::VirtIOConsole"]],["impl&lt;'a, H&gt; Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.VirtIOGpu.html\" title=\"struct virtio_drivers::VirtIOGpu\">VirtIOGpu</a>&lt;'a, H&gt;",1,["virtio_drivers::gpu::VirtIOGpu"]],["impl Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.VirtIOHeader.html\" title=\"struct virtio_drivers::VirtIOHeader\">VirtIOHeader</a>",1,["virtio_drivers::header::VirtIOHeader"]],["impl Freeze for <a class=\"enum\" href=\"virtio_drivers/enum.DeviceType.html\" title=\"enum virtio_drivers::DeviceType\">DeviceType</a>",1,["virtio_drivers::header::DeviceType"]],["impl&lt;'a, H&gt; Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.VirtIOInput.html\" title=\"struct virtio_drivers::VirtIOInput\">VirtIOInput</a>&lt;'a, H&gt;",1,["virtio_drivers::input::VirtIOInput"]],["impl Freeze for <a class=\"enum\" href=\"virtio_drivers/enum.InputConfigSelect.html\" title=\"enum virtio_drivers::InputConfigSelect\">InputConfigSelect</a>",1,["virtio_drivers::input::InputConfigSelect"]],["impl Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.InputEvent.html\" title=\"struct virtio_drivers::InputEvent\">InputEvent</a>",1,["virtio_drivers::input::InputEvent"]],["impl&lt;'a, H&gt; Freeze for <a class=\"struct\" href=\"virtio_drivers/struct.VirtIONet.html\" title=\"struct virtio_drivers::VirtIONet\">VirtIONet</a>&lt;'a, H&gt;",1,["virtio_drivers::net::VirtIONet"]],["impl Freeze for <a class=\"enum\" href=\"virtio_drivers/enum.Error.html\" title=\"enum virtio_drivers::Error\">Error</a>",1,["virtio_drivers::Error"]]],
"volatile":[["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"volatile/struct.Volatile.html\" title=\"struct volatile::Volatile\">Volatile</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,</span>",1,["volatile::Volatile"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"volatile/struct.ReadOnly.html\" title=\"struct volatile::ReadOnly\">ReadOnly</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,</span>",1,["volatile::ReadOnly"]],["impl&lt;T&gt; Freeze for <a class=\"struct\" href=\"volatile/struct.WriteOnly.html\" title=\"struct volatile::WriteOnly\">WriteOnly</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Freeze,</span>",1,["volatile::WriteOnly"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()