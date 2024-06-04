export const SUBJECT = [
    {
        title: 'Dasar Pemrograman',
        mandatory: true,
        description: `Melalui mata kuliah ini, mahasiswa akan belajar mengenai konsep dasar-dasar pemrograman dan mempraktekkannya. Perkuliahan dilakukan di kelas dan praktik dilakukan di kelas maupun di laboratorium. Mahasiswa akan belajar tentang algoritma sederhana, cara menuangkan algoritma, konsep percabangan, konsep perulangan, input, proses dan output, merumuskan solusi algoritma untuk permasalahan iterative dan percabangan bertingkat, menelusuri dan mensimulasi eksekusi fungsi rekursif dan mengimplementasikan algoritma sesuai rumusan solusi dalam bentuk program dengan bahasa pemrograman tertentu.`,
        objective: [
            `Mahasiswa memahami metodologi pengembangan software (analisa, design, coding, testing, dokumentasi) dan mampu menerapkan metodologi tersebut pada persoalan-persoalan sederhana.`,
            `Mahasiswa mampu merancang program secara modular/terstruktur dengan pendekatan top-down menggunakan fungsi-fungsi.`,
            `Mahasiswa mampu mengimplementasikan algoritma dengan benar dan terstruktur menggunakan bahasa C.`,
            `Mahasiswa mampu melakukan proses debugging dan pengujian.`,
            `Mahasiswa mampu berpikir komprehensif dalam merancang dan mengimplementasi program.`,
            `Mahasiswa mampu berkomunikasi dan bekerja sama dalam sebuah tim melalui mekanisme dokumentasi program.`,
            `Mahasiswa mampu menuangkan hasil pemikirannya dalam bahasa lisan maupun tulisan dengan baik.`
        ]
    },
    {
        title: 'Struktur Data',
        mandatory: true,
        description: `Mahasiswa akan mempelajari berbagai macam struktur penyimpanan, penyusunan dan pengaturan banyak data serta algoritma terkait. Konsep abstraksi data dibahas untuk menentukan jenis struktur data secara linear maupun non-linear dengan contoh-contoh permasalahan. Praktikum dalam bahasa C/C++ dilakukan untuk implementasi struktur`,
        objective: [
            `Mahasiswa mampu melakukan abstraksi data pada permasalahan nyata menurut konsep struktur data linear (stack, queue), non-linear (tree, graph) dan menggunakan C/C++`,
            `Mahasiswa mampu mengimplementasikan algoritma-algoritma akses data pada struktur linear secara statis (array) dan dinamis (linked-list) dalam menyelesaikan permasalahan yang memperhatikan urutan data masuk (FIFO, LIFO) menggunakan C/C++`,
            `Mahasiswa mampu mengimplementasikan algoritma-algoritma akses data pada struktur nonlinear dalam menyelesaikan permasalahan menggunakan C/C++`,
            `Mahasiswa mampu mengimplentasikan struktur hash-table untuk algoritma akses data besar berdasarkan data penciri dalam menyelesaikan permasalahan menggunakan C/C++`,
        ]
    },
    {
        title: 'Pemrograman Berorientasi Objek',
        mandatory: true,
        description: `Pada perkuliahan ini, mahasiswa akan belajar memodelkan permasalahan pemrograman menggunakan konsep pemrograman berbasis objek. Konsepkonsep pemrograman berorientasi objek yang diajarkan antara lain berupa konsep kelas, inheritance, overriding, overloading, polimorfisme, abstractclass, dan interface. Mahasiswa juga akan diajarkan mengenai daur hidup objek di dalam memori komputer. Selain itu, mahasiswa juga dituntut untuk dapat memanfaatkan pustaka standar di dalam bahasa pemrograman objek (collections, iterator, GUI). Sehingga pada akhirnya mahasiswa dapat membuat program yang handal (reliable).`,
        objective: [
            `Mahasiswa mengetahui perbedaan konsep pemrograman objek dengan konsep pemrograman prosedural.`,
            `Mahasiswa memahami konsep pemrograman berbasis objek, yaitu definisi kelas dan diagram kelas.`,
            `Mahasiswa mampu memecahkan permasalahan menggunakan pendekatan berorientasi objek.`,
            `Mahasiswa mampu memahami konsep sub kelas, inheritance, overriding, overloading, polimorfisme, abstract class, dan interface.`,
            `Mahasiswa memahami konsep daur hidup objek (object lifetime and resource management).`,
            `Mahasiswa mampu menggunakan collections, iterator, dan pustaka standar dalam bahasa pemrograman objek.`,
            `Mahasiswa mampu membangun aplikasi berbasis GUI yang berorientasi objek dan multithreading.`,
        ]
    },
    {
        title: 'Perancangan dan Analisis Algoritma',
        mandatory: true,
        description: `Pada perkuliahan ini, mahasiswa akan belajar mengenai perancangan dan analisis algoritma dalam pemrograman. Konsep-konsep perancangan dan algoritma yang dibahas antara lain perhitungan kompleksitas algoritma dalam notasi asimtotik, menganalisis kebenaran menggunakan loop invariant dari algoritma iteratif (straight-forward) dan divide-conquer. Mahasiswa juga diharapkan mampu menjelaskan strategi dan analisis rancangan serta implementasi algoritma rekursif dan non rekursif untuk menyelesaikan permasalahan-permasalahan program yang nyata.`,
        objective: [
            `Mahasiswa mampu menjelaskan peranan algoritma dalam komputasi`,
            `Mahasiswa mampu menjelaskan, merepresentasikan dan menghitung kompleksitas algoritma dalam notasi asimtotik (big-oh, theta, little-oh)`,
            `Mahasiswa dapat menganalisis kebenaran menggunakan loop invariant dari algoritma straight-forward/iteratif dan divide-conquer`,
            `Mahasiswa dapat menjelaskan strategi dan analisis rancangan serta implementasi algoritma rekursif dan non rekursif untuk menyelesaikan problem-problem real.`
        ]
    },
    {
        title: 'Pemrograman Web',
        mandatory: true,
        description: `Mahasiswa memiliki pemahaman yang mendalam, kritis dan sistematis tentang karakteristik dan prinsip desain website yang baik, mampu mendemonstrasikan bagaimana teknologi web digunakan pada situs-situs web terkini.`,
        objective: [
            `Mahasiswa memiliki pemahaman perkembangan teknologi web dan dasar-dasar HTML.`,
            `Mahasiswa memiliki kemampuan membuat aplikasi client-side menggunakan XHTML,CSS, PHP dan JavaScript.`,
            `Mahasiswa mampu membuat aplikasi web sederhana`,
            `Mahasiswa mampu membuat sistem informasi sederhana berbasis web dengan ADO.NET.`,
            `Mahasiswa mampu membuat aplikasi web service.`,
        ]
    },
    {
        title: 'Pemrograman Berbasis Kerangka Kerja',
        mandatory: true,
        description: `Pada perkuliahan ini, mahasiswa akan belajar konsep dasar desain kerangka kerja dan memanfaatkan kerangka kerja yang sudah tersedia. Mahasiswa diharapkan dapat memanfaatkan kerangka kerja pada sebuah proyek perangkat lunak dengan efektif dan efisien. Pemanfaatan kerangka kerja menyesuaikan dengan konteks proyek perangkat lunak yang sedang dikerjakan. Mahasiswa dapat mengidentifikasi kebutuhan kerangka kerja, batasan-batasan, keuntungan dan kerugian dari segi biaya dan waktu. Mahasiswa juga dapat merancang dan melakukan implementasi perangkat lunak yang mempertimbangkan kerangka kerja. Selain itu mahasiswa dapat memodifikasi/ menambahkan fungsionalitas pada kerangka kerja yang sudah ada agar sesuai dengan kebutuhan.`,
        objective: [
            `Mahasiswa mampu menjelaskan konsep dasar desain kerangka kerja.`,
            `Mahasiswa mampu menjelaskan perbedaan pengembangan perangkat lunak secara tradisional dengan pengembangan perangkat lunak berbasis kerangka kerja.`,
            `Mahasiswa mampu menjelaskan beberapa tipe kerangka kerja di domain yang berbeda-beda.`,
            `Mahasiswa mampu mengidentifikasi keuntungan dan kerugian dalam penggunaan kerangka kerja.`,
            `Mahasiswa mampu mengidentifikasi kerangka kerja yang sesuai dengan permasalahan dan/atau kebutuhan pengguna.`,
            `Mahasiswa mampu mengidentifikasi batasan-batasan dalam pengembangan perangkat lunak berbasis kerangka kerja.`,
            `Mahasiswa mampu mendesain rancangan perangkat lunak dengan mempertimbangkan kerangka kerja.`,
            `Mahasiswa mampu mengimplementasikan perangkat lunak menggunakan beberapa kerangka kerja.`,
            `Mahasiswa mampu menambahkan fungsionalitas baru pada suatu kerangka kerja (extension)`,
        ]
    },
    {
        title: 'Pengembangan dan Analisis Algoritma',
        mandatory: false,
        description: `Pada perkuliahan ini, mahasiswa akan belajar melakukan abstraksi optimal dari permasalahan nyata dengan tingkat kompleksitas menengah dan lanjut. Mahasiswa diharapkan juga mampu mewujudkan abstraksi tersebut ke dalam suatu rancangan algoritma dengan mempertimbangkan aspek kebenaran dan efisiensi secara formal. Pada akhirnya mahasiswa mampu mempresentasikan keseluruhan tahapan rancangan dan analisis algoritma secara sistematik baik secara lisan maupun secara tulisan.`,
        objective: [
            `Mahasiswa mampu secara kreatif membuat abstraksi optimal dari persoalan nyata dengan tingkat kompleksitas medium dan hard.`,
            `Mahasiswa mampu mewujudkan abstraksi persoalan ke dalam suatu rancangan algoritma dengan mempertimbangkan aspek kebenaran dan efisiensi`,
            `Mahasiswa mampu menyatakan analisis kebenaran dan kompleksitas secara formal terhadap suatu rancangan algoritma`,
            `Mahasiswa dapat mengimplementasikan hasil rancangan algoritma dengan menggunakan bahasa OOP dan menguji akurasinya pada suatu online judge`,
            `Mahasiswa mampu mempresentasikan keseluruhan tahapan rancangan dan analisis algoritma secara sistematik baik secara lisan maupun tulisan`
        ]
    },
    {
        title: 'Pemrograman Perangkat Bergerak',
        mandatory: false,
        description: `Mahasiswa belajar mengenai pembuatan aplikasi berbasis mobile`,
        objective: [
            `Mahasiswa memiliki sebuah pemahaman tentang pemrograman perangkat mobile, mampu mengimplementasi berbagai macam platform pada Perangkat mobile,mampu memakai JavaScript, AJAX pada perangkat mobile dan memakai template standar,mampu membuat halaman mobile web pada browser smartphone,mampu memakai teknik-teknik penghematan bandwith,mampu memakai teknik-teknik penghematan bandwith.`,
        ]
    }, 
]