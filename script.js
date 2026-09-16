/* ==========================================================
   1) DATA
   ========================================================== */
const COLORS = {
  phone:  [{n:'مشکی',c:'#111827'},{n:'آبی',c:'#3363ff'},{n:'نقره‌ای',c:'#cbd5e1'}],
  laptop: [{n:'خاکستری',c:'#475569'},{n:'نقره‌ای',c:'#cbd5e1'}],
  audio:  [{n:'مشکی',c:'#111827'},{n:'سفید',c:'#f8fafc'},{n:'آبی',c:'#06b6d4'}],
  watch:  [{n:'مشکی',c:'#111827'},{n:'نارنجی',c:'#f97316'},{n:'سبز',c:'#10b981'}],
  tablet: [{n:'نقره‌ای',c:'#cbd5e1'},{n:'آبی',c:'#3363ff'}],
  acc:    [{n:'مشکی',c:'#111827'},{n:'سفید',c:'#f8fafc'}]
};

const PRODUCTS = [
  {id:1,title:'گوشی هوشمند نوا اولترا 5G',cat:'گوشی',brand:'نوا',price:68900000,old:74500000,rate:5,rc:214,seeds:['images/p1-1.jpg','images/p1-2.jpg','images/p1-3.jpg'],stock:12,sold:840,isNew:false,isHot:true,added:20,sku:'NV-PH-001',
   desc:'پرچمدار نسل جدید نوا با نمایشگر ۶.۸ اینچی AMOLED با نرخ ۱۲۰ هرتز، تراشه اختصاصی Nova X2، دوربین ۲۰۰ مگاپیکسلی با لرزشگیر اپتیکال و شارژ فوق‌سریع ۱۲۰ واتی.',
   features:['نمایشگر AMOLED با نرخ ۱۲۰ هرتز','دوربین ۲۰۰ مگاپیکسلی OIS','شارژ سریع ۱۲۰ وات','گواهی ضدآب IP68'],
   specs:{'نمایشگر':'۶.۸ اینچ AMOLED، ۱۲۰Hz','پردازنده':'Nova X2 هشت‌هسته‌ای','رم / حافظه':'۱۲ / ۵۱۲ گیگابایت','باتری':'۵۵۰۰ میلی‌آمپر','دوربین':'۲۰۰+۵۰+۱۲ مگاپیکسل'},colors:'phone'},
  {id:2,title:'گوشی نوا لایت پرو',cat:'گوشی',brand:'نوا',price:24500000,old:null,rate:4,rc:167,seeds:['images/p2-1.jpg','images/p2-2.jpg','images/p2-3.jpg'],stock:34,sold:1204,isNew:false,isHot:false,added:90,sku:'NV-PH-002',
   desc:'انتخابی هوشمندانه برای کاربران روزمره؛ عملکرد روان، دوربین ۶۴ مگاپیکسلی و طراحی سبک و شیک با باتری بادوام.',
   features:['حافظه ۲۵۶ گیگابایت','دوربین ۶۴ مگاپیکسل','بدنه فوق‌سبک ۱۷۵ گرمی'],specs:{'نمایشگر':'۶.۵ اینچ AMOLED، ۹۰Hz','پردازنده':'Nova S1','رم / حافظه':'۸ / ۲۵۶ گیگابایت','باتری':'۵۰۰۰ میلی‌آمپر'},colors:'phone'},
  {id:3,title:'آیفون ۱۶ پرو مکس',cat:'گوشی',brand:'اپل',price:98000000,old:105000000,rate:5,rc:98,seeds:['images/p3-1.jpg','images/p3-2.jpg','images/p3-3.jpg'],stock:8,sold:312,isNew:true,isHot:true,added:5,sku:'AP-PH-016',
   desc:'جدیدترین پرچمدار اپل با تراشه A18 Pro، بدنه تیتانیومی، دکمه اختصاصی دوربین و بهترین سیستم دوربین آیفون تا امروز.',
   features:['تراشه A18 Pro','بدنه تیتانیومی','دکمه Camera Control','فیلم‌برداری 4K/120'],specs:{'نمایشگر':'۶.۹ اینچ LTPO OLED','پردازنده':'Apple A18 Pro','حافظه':'۲۵۶ گیگابایت','باتری':'۴۶۸۵ میلی‌آمپر'},colors:'phone'},
  {id:4,title:'گلکسی S25 اولترا',cat:'گوشی',brand:'سامسونگ',price:89500000,old:null,rate:5,rc:143,seeds:['images/p4-1.jpg','images/p4-2.jpg','images/p4-3.jpg'],stock:15,sold:428,isNew:true,isHot:false,added:8,sku:'SM-PH-025',
   desc:'پرچمدار سامسونگ با قلم S Pen، هوش مصنوعی Galaxy AI، دوربین ۲۰۰ مگاپیکسلی و فریم تیتانیومی مقاوم.',
   features:['قلم S Pen داخلی','هوش مصنوعی Galaxy AI','دوربین ۲۰۰ مگاپیکسلی'],specs:{'نمایشگر':'۶.۹ اینچ Dynamic AMOLED','پردازنده':'Snapdragon 8 Elite','رم / حافظه':'۱۲ / ۵۱۲ گیگابایت','باتری':'۵۰۰۰ میلی‌آمپر'},colors:'phone'},
  {id:5,title:'ردمی نوت ۱۴ پرو',cat:'گوشی',brand:'شیائومی',price:16900000,old:18200000,rate:4,rc:256,seeds:['images/p5-1.jpg','images/p5-2.jpg','images/p5-3.jpg'],stock:0,sold:2100,isNew:false,isHot:false,added:120,sku:'XM-PH-014',
   desc:'میان‌رده محبوب شیائومی با نمایشگر خمیده AMOLED، شارژ ۹۰ واتی و دوربین قدرتمند؛ بهترین ارزش خرید امسال.',
   features:['نمایشگر خمیده AMOLED','شارژ ۹۰ وات','اسپیکر استریو JBL'],specs:{'نمایشگر':'۶.۶۷ اینچ AMOLED','پردازنده':'Dimensity 7300','رم / حافظه':'۸ / ۲۵۶ گیگابایت','باتری':'۵۱۱۰ میلی‌آمپر'},colors:'phone'},

  {id:6,title:'لپ‌تاپ نوا بوک پرو ۱۶',cat:'لپ‌تاپ',brand:'نوا',price:112000000,old:125000000,rate:5,rc:89,seeds:['images/p6-1.jpg','images/p6-2.jpg','images/p6-3.jpg'],stock:7,sold:156,isNew:false,isHot:true,added:30,sku:'NV-LP-101',
   desc:'ورک‌استیشن قابل حمل با پردازنده ۱۴ هسته‌ای، ۳۲ گیگابایت رم، گرافیک RTX و صفحه‌نمایش Mini-LED خیره‌کننده برای حرفه‌ای‌ها.',
   features:['رم ۳۲ گیگابایت','گرافیک RTX 4070','نمایشگر Mini-LED','بدنه آلومینیوم CNC'],specs:{'نمایشگر':'۱۶ اینچ Mini-LED','پردازنده':'۱۴ هسته‌ای Nova Core','رم':'۳۲ گیگ DDR5','حافظه':'۱ ترابایت SSD'},colors:'laptop'},
  {id:7,title:'لپ‌تاپ نوا ایر ۱۳',cat:'لپ‌تاپ',brand:'نوا',price:54000000,old:null,rate:4,rc:134,seeds:['images/p7-1.jpg','images/p7-2.jpg','images/p7-3.jpg'],stock:21,sold:540,isNew:true,isHot:false,added:12,sku:'NV-LP-102',
   desc:'فوق‌باریک با وزن تنها ۱.۱ کیلوگرم و باتری ۱۸ ساعته؛ همراه همیشگی دانشجویان و سفرهای کاری.',
   features:['وزن ۱.۱ کیلوگرم','باتری ۱۸ ساعته','شارژ USB-C سریع'],specs:{'نمایشگر':'۱۳.۳ اینچ 2.8K','پردازنده':'Nova Core i7','رم':'۱۶ گیگ','حافظه':'۵۱۲ گیگ SSD'},colors:'laptop'},
  {id:8,title:'لپ‌تاپ گیمینگ نوا رپتور',cat:'لپ‌تاپ',brand:'نوا',price:96500000,old:108000000,rate:5,rc:176,seeds:['images/p8-1.jpg','images/p8-2.jpg','images/p8-3.jpg'],stock:9,sold:389,isNew:false,isHot:true,added:45,sku:'NV-LP-103',
   desc:'هیولا مخصوص گیمرها؛ کارت گرافیک RTX 4070، نمایشگر ۱۶۵ هرتزی، سیستم خنک‌کننده بخار و کیبورد مکانیکال RGB.',
   features:['گرافیک RTX 4070','نمایشگر ۱۶۵ هرتز','خنک‌کننده Vapor Chamber','کیبورد مکانیکال RGB'],specs:{'نمایشگر':'۱۵.۶ اینچ ۱۶۵Hz','پردازنده':'Nova Core i9','رم':'۳۲ گیگ DDR5','حافظه':'۱ ترابایت SSD'},colors:'laptop'},
  {id:9,title:'مک‌بوک ایر M4',cat:'لپ‌تاپ',brand:'اپل',price:89000000,old:null,rate:5,rc:77,seeds:['images/p9-1.jpg','images/p9-2.jpg','images/p9-3.jpg'],stock:11,sold:203,isNew:true,isHot:false,added:15,sku:'AP-LP-004',
   desc:'باریک‌ترین مک‌بوک تاریخ با تراشه M4، نمایشگر Liquid Retina و ۱۸ ساعت شارژدهی؛ سکوت مطلق بدون فن.',
   features:['تراشه Apple M4','بدون فن، کاملاً بی‌صدا','۱۸ ساعت باتری'],specs:{'نمایشگر':'۱۳.۶ اینچ Liquid Retina','پردازنده':'Apple M4','رم':'۱۶ گیگ','حافظه':'۵۱۲ گیگ'},colors:'laptop'},
  {id:10,title:'لپ‌تاپ ایسوس ویووبوک ۱۵',cat:'لپ‌تاپ',brand:'ایسوس',price:42500000,old:46000000,rate:4,rc:112,seeds:['images/p10-1.jpg','images/p10-2.jpg','images/p10-3.jpg'],stock:18,sold:467,isNew:false,isHot:false,added:70,sku:'AS-LP-015',
   desc:'گزینه اقتصادی و خوش‌ساخت ایسوس برای کارهای اداری، دانشگاه و طراحی سبک با نمایشگر OLED رنگی.',
   features:['نمایشگر OLED','حسگر اثر انگشت','وبکم Full HD'],specs:{'نمایشگر':'۱۵.۶ اینچ OLED','پردازنده':'Core i5 نسل ۱۳','رم':'۱۶ گیگ','حافظه':'۵۱۲ گیگ SSD'},colors:'laptop'},

  {id:11,title:'هدفون نوا سایلنس Max',cat:'هدفون',brand:'نوا',price:12900000,old:15500000,rate:5,rc:341,seeds:['images/p11-1.jpg','images/p11-2.jpg','images/p11-3.jpg'],stock:26,sold:1890,isNew:false,isHot:true,added:40,sku:'NV-HP-201',
   desc:'نویز کنسلینگ اکتیو نسل چهارم، صدای Hi-Res، درایور ۴۰ میلی‌متری و ۴۰ ساعت پخش مداوم موسیقی.',
   features:['حذف نویز ANC نسل ۴','۴۰ ساعت باتری','صدای Hi-Res'],specs:{'درایور':'۴۰ میلی‌متری','بلوتوث':'نسخه ۵.۳','باتری':'۴۰ ساعت','وزن':'۲۵۴ گرم'},colors:'audio'},
  {id:12,title:'هندزفری نوا پادز ۲',cat:'هدفون',brand:'نوا',price:4890000,old:null,rate:4,rc:428,seeds:['images/p12-1.jpg','images/p12-2.jpg','images/p12-3.jpg'],stock:58,sold:3200,isNew:true,isHot:false,added:10,sku:'NV-HP-202',
   desc:'ایرباد بی‌سیم با اتصال پایدار بلوتوث ۵.۳، کیس شارژ بی‌سیم و مقاومت در برابر آب؛ صدای شفاف، قیمت منصفانه.',
   features:['بلوتوث ۵.۳','کیس شارژ بی‌سیم','مقاومت IPX5'],specs:{'بلوتوث':'۵.۳','باتری':'۶+۲۴ ساعت','مقاومت':'IPX5'},colors:'audio'},
  {id:13,title:'هدفون سونی WH-1000XM5',cat:'هدفون',brand:'سونی',price:18700000,old:21000000,rate:5,rc:189,seeds:['images/p13-1.jpg','images/p13-2.jpg','images/p13-3.jpg'],stock:14,sold:654,isNew:false,isHot:false,added:100,sku:'SN-HP-005',
   desc:'پادشاه نویز کنسلینگ جهان؛ بهترین انتخاب برای سفر، کار و استودیو با ۳۰ ساعت باتری و میکروفون ۸گانه.',
   features:['بهترین ANC جهان','۳۰ ساعت باتری','میکروفون ۸گانه'],specs:{'درایور':'۳۰ میلی‌متری','بلوتوث':'۵.۲','باتری':'۳۰ ساعت','وزن':'۲۵۰ گرم'},colors:'audio'},
  {id:14,title:'ایرپادز پرو ۲',cat:'هدفون',brand:'اپل',price:13400000,old:null,rate:4,rc:267,seeds:['images/p14-1.jpg','images/p14-2.jpg','images/p14-3.jpg'],stock:31,sold:1450,isNew:false,isHot:false,added:80,sku:'AP-HP-002',
   desc:'ایرباد پرچمدار اپل با تراشه H2، حذف نویز ۲ برابری و کیس MagSafe با اسپیکر؛ هماهنگی بی‌نظیر با آیفون.',
   features:['تراشه H2','حذف نویز تطبیقی','کیس MagSafe'],specs:{'تراشه':'Apple H2','باتری':'۶+۲۴ ساعت','مقاومت':'IP54'},colors:'audio'},

  {id:15,title:'ساعت هوشمند نوا واچ S2',cat:'ساعت هوشمند',brand:'نوا',price:8900000,old:10500000,rate:4,rc:198,seeds:['images/p15-1.jpg','images/p15-2.jpg','images/p15-3.jpg'],stock:22,sold:876,isNew:true,isHot:true,added:7,sku:'NV-WT-301',
   desc:'نمایشگر AMOLED همیشه‌روشن، مکالمه بلوتوثی، پایش اکسیژن خون و ضربان قلب، GPS داخلی و ۱۰ روز باتری.',
   features:['نمایشگر AMOLED','مکالمه بلوتوثی','GPS داخلی','۱۰ روز باتری'],specs:{'نمایشگر':'۱.۹ اینچ AMOLED','باتری':'۱۰ روز','مقاومت':'5ATM','حافظه':'۴ گیگ'},colors:'watch'},
  {id:16,title:'اپل واچ سری ۱۰',cat:'ساعت هوشمند',brand:'اپل',price:24900000,old:null,rate:5,rc:86,seeds:['images/p16-1.jpg','images/p16-2.jpg','images/p16-3.jpg'],stock:10,sold:234,isNew:true,isHot:false,added:6,sku:'AP-WT-010',
   desc:'باریک‌ترین اپل واچ تاریخ با نمایشگر بزرگ‌تر، تراشه S10، تشخیص آپنه خواب و شارژ ۸۰٪ در ۳۰ دقیقه.',
   features:['تراشه S10','تشخیص آپنه خواب','شارژ فوق‌سریع'],specs:{'نمایشگر':'LTPO OLED','تراشه':'Apple S10','مقاومت':'۵۰ متر','باتری':'۱۸ ساعت'},colors:'watch'},
  {id:17,title:'ساعت هواوی واچ GT5',cat:'ساعت هوشمند',brand:'هواوی',price:11200000,old:12800000,rate:4,rc:121,seeds:['images/p17-1.jpg','images/p17-2.jpg','images/p17-3.jpg'],stock:17,sold:543,isNew:false,isHot:false,added:55,sku:'HW-WT-005',
   desc:'۱۴ روز شارژدهی واقعی، بیش از ۱۰۰ حالت ورزشی، طراحی کلاسیک با بدنه فلزی و سیستم TruSense دقیق.',
   features:['۱۴ روز باتری','۱۰۰+ حالت ورزشی','بدنه فلزی'],specs:{'نمایشگر':'۱.۳۹ اینچ AMOLED','باتری':'۱۴ روز','مقاومت':'5ATM'},colors:'watch'},

  {id:18,title:'تبلت نوا پد ۱۱',cat:'تبلت',brand:'نوا',price:19500000,old:22000000,rate:4,rc:143,seeds:['images/p18-1.jpg','images/p18-2.jpg','images/p18-3.jpg'],stock:19,sold:432,isNew:true,isHot:false,added:14,sku:'NV-TB-401',
   desc:'تبلت ۱۱ اینچی با نمایشگر ۹۰ هرتزی، اسپیکر چهارگانه، پشتیبانی از قلم و باتری ۸۰۰۰ میلی‌آمپری برای کار و سرگرمی.',
   features:['نمایشگر ۹۰ هرتز','اسپیکر چهارگانه','پشتیبانی از قلم'],specs:{'نمایشگر':'۱۱ اینچ ۹۰Hz','رم / حافظه':'۸ / ۱۲۸ گیگ','باتری':'۸۰۰۰ میلی‌آمپر'},colors:'tablet'},
  {id:19,title:'آیپد ایر M3',cat:'تبلت',brand:'اپل',price:46000000,old:null,rate:5,rc:64,seeds:['images/p19-1.jpg','images/p19-2.jpg','images/p19-3.jpg'],stock:9,sold:187,isNew:true,isHot:false,added:9,sku:'AP-TB-003',
   desc:'قدرت تراشه M3 در بدنه‌ای باریک؛ بهترین تبلت برای طراحان، دانشجویان و حرفه‌ای‌های خلاق با پشتیبانی از Apple Pencil Pro.',
   features:['تراشه Apple M3','پشتیبانی Pencil Pro','تاچ آیدی'],specs:{'نمایشگر':'۱۱ اینچ Liquid Retina','پردازنده':'Apple M3','حافظه':'۱۲۸ گیگ'},colors:'tablet'},
  {id:20,title:'تبلت لنوو تب P12',cat:'تبلت',brand:'لنوو',price:14800000,old:null,rate:4,rc:97,seeds:['images/p20-1.jpg','images/p20-2.jpg','images/p20-3.jpg'],stock:24,sold:356,isNew:false,isHot:false,added:65,sku:'LN-TB-012',
   desc:'تبلت خوش‌قیمت لنوو با نمایشگر ۱۲.۷ اینچی 3K، باتری قدرتمند و حالت مطالعه؛ عالی برای فیلم و کلاس آنلاین.',
   features:['نمایشگر 3K','حالت مطالعه','باتری ۱۰۲۰۰'],specs:{'نمایشگر':'۱۲.۷ اینچ 3K','رم / حافظه':'۸ / ۱۲۸ گیگ','باتری':'۱۰۲۰۰ میلی‌آمپر'},colors:'tablet'},

  {id:21,title:'شارژر فست‌شارژ ۱۲۰W نوا',cat:'لوازم جانبی',brand:'نوا',price:1890000,old:2400000,rate:4,rc:512,seeds:['images/p21-1.jpg','images/p21-2.jpg','images/p21-3.jpg'],stock:120,sold:5400,isNew:false,isHot:true,added:50,sku:'NV-AC-501',
   desc:'شارژر GaN سه‌پورت با توان ۱۲۰ وات؛ شارژ همزمان لپ‌تاپ، گوشی و ساعت با محافظت هوشمند چندلایه.',
   features:['فناوری GaN','۳ پورت همزمان','محافظ هوشمند'],specs:{'توان':'۱۲۰ وات','پورت':'۲×USB-C + USB-A','فناوری':'GaN II'},colors:'acc'},
  {id:22,title:'موس گیمینگ نوا استرایک',cat:'لوازم جانبی',brand:'نوا',price:2450000,old:null,rate:5,rc:289,seeds:['images/p22-1.jpg','images/p22-2.jpg','images/p22-3.jpg'],stock:67,sold:1780,isNew:true,isHot:false,added:11,sku:'NV-AC-502',
   desc:'موس گیمینگ ۲۶K DPI با سوییچ اپتیکال ۹۰ میلیون کلیکی، نورپردازی RGB و ارگونومی حرفه‌ای برای گیمرها.',
   features:['سنسور 26K DPI','سوییچ اپتیکال','نور RGB'],specs:{'سنسور':'26K DPI','سوییچ':'اپتیکال ۹۰M','اتصال':'باسیم + 2.4G'},colors:'acc'},
  {id:23,title:'کیبورد مکانیکال RGB نوا',cat:'لوازم جانبی',brand:'نوا',price:3900000,old:4600000,rate:4,rc:176,seeds:['images/p23-1.jpg','images/p23-2.jpg','images/p23-3.jpg'],stock:43,sold:920,isNew:false,isHot:false,added:35,sku:'NV-AC-503',
   desc:'کیبورد مکانیکال فول‌سایز با سوییچ قابل تعویض، نورپردازی RGB جنوب‌سو و بدنه آلومینیومی؛ لذت تایپ واقعی.',
   features:['سوییچ هات‌سواپ','بدنه آلومینیومی','RGB جنوب‌سو'],specs:{'سوییچ':'هات‌سواپ خطی','اتصال':'سه‌حالته','باتری':'۴۰۰۰ میلی‌آمپر'},colors:'acc'},
  {id:24,title:'پاوربانک ۲۰۰۰۰ نوا',cat:'لوازم جانبی',brand:'نوا',price:2150000,old:null,rate:4,rc:634,seeds:['images/p24-1.jpg','images/p24-2.jpg','images/p24-3.jpg'],stock:95,sold:7300,isNew:false,isHot:false,added:110,sku:'NV-AC-504',
   desc:'پاوربانک ۲۰۰۰۰ میلی‌آمپری با شارژ سریع ۶۵ وات، نمایشگر درصد و شارژ همزمان ۳ دستگاه؛ همراه سفر.',
   features:['ظرفیت ۲۰۰۰۰','شارژ ۶۵ وات','نمایشگر LED'],specs:{'ظرفیت':'۲۰۰۰۰ میلی‌آمپر','توان':'۶۵ وات','پورت':'۲×USB-C + USB-A'},colors:'acc'}
];

const CATS = [
  {n:'گوشی',icon:'fa-mobile-screen',seed:'images/cat-phone.jpg'},
  {n:'لپ‌تاپ',icon:'fa-laptop',seed:'images/cat-laptop.jpg'},
  {n:'هدفون',icon:'fa-headphones',seed:'images/cat-audio.jpg'},
  {n:'ساعت هوشمند',icon:'fa-clock',seed:'images/cat-watch.jpg'},
  {n:'تبلت',icon:'fa-tablet-screen-button',seed:'images/cat-tablet.jpg'},
  {n:'لوازم جانبی',icon:'fa-plug',seed:'images/cat-acc.jpg'}
];
const BRANDS = ['نوا','اپل','سامسونگ','شیائومی','سونی','ایسوس','هواوی','لنوو'];
const COUPONS = {
  'WELCOME10': {pct:10, max:2000000, min:0,        txt:'۱۰٪ تخفیف تا سقف ۲ میلیون'},
  'NOVA20':    {pct:20, max:5000000, min:10000000, txt:'۲۰٪ تخفیف خرید بالای ۱۰ میلیون'},
  'FREESHIP':  {pct:0,  max:0,       min:0, freeShip:true, txt:'ارسال رایگان'}
};
const SHIPPINGS = [
  {id:'pishtaz', n:'پیشتاز (۲ تا ۳ روز کاری)', pr:69000,  icon:'fa-truck-fast'},
  {id:'sefareshi',n:'سفارشی (۴ تا ۶ روز کاری)', pr:49000,  icon:'fa-truck'},
  {id:'express', n:'اکسپرس تهران (تحویل امروز)',pr:89000,  icon:'fa-motorcycle'}
];
const FREE_SHIP_OVER = 5000000;
const PAYMENTS = [
  {id:'online', n:'پرداخت آنلاین', d:'درگاه امن بانکی (شبیه‌سازی‌شده)', icon:'fa-credit-card'},
  {id:'cod',    n:'پرداخت در محل', d:'نقدی یا کارتخوان درب منزل', icon:'fa-money-bill-wave'},
  {id:'card',   n:'کارت به کارت', d:'واریز به کارت فروشگاه', icon:'fa-building-columns'}
];
const BLOGS = [
  {t:'راهنمای خرید گوشی ۱۴۰۵؛ بهترین‌ها در هر بودجه',d:'از اقتصادی تا پرچمدار؛ با این راهنمای جامع، بهترین گوشی متناسب با بودجه‌ات را پیدا کن.',seed:'images/blog-ph.jpg',date:'۱۸ شهریور ۱۴۰۵',read:'۷ دقیقه',cat:'راهنمای خرید',
   body:[
    {p:'بازار گوشی در سال ۱۴۰۵ پر از انتخاب‌های وسوسه‌کننده است؛ از میان‌رده‌های خوش‌قیمت تا پرچمدارهای صد میلیونی. اما سؤال اصلی این است: با بودجه‌ای که داری، بهترین انتخاب کدام است؟ در این راهنما سه بازه قیمتی اصلی را بررسی می‌کنیم تا بدون سردرگمی تصمیم بگیری.'},
    {h:'بودجه اقتصادی؛ ۱۰ تا ۲۰ میلیون تومان'},
    {p:'اگر استفاده‌ات روزمره است — شبکه‌های اجتماعی، تماس، وب‌گردی و کمی بازی — نیازی به هزینه اضافه نیست. گوشی‌هایی مثل ردمی نوت ۱۴ پرو با نمایشگر AMOLED، شارژ سریع و دوربین قابل‌قبول، بهترین ارزش خرید این بازه‌اند. نکته مهم: سراغ حافظه کمتر از ۱۲۸ گیگ نرو، چون خیلی زود پر می‌شود.'},
    {h:'میان‌رده؛ ۲۰ تا ۴۰ میلیون تومان'},
    {p:'اینجا نقطه طلایی بازار است. نوا لایت پرو با بدنه سبک، دوربین ۶۴ مگاپیکسلی و باتری بادوام، تجربه‌ای نزدیک به پرچمدار می‌دهد بدون اینکه جیبت خالی شود. در این بازه به نرخ نوسازی نمایشگر (حداقل ۹۰ هرتز) و سرعت شارژ دقت کن؛ این دو بیشترین تأثیر را در حس روزمره دارند.'},
    {h:'پرچمدار؛ بالای ۶۰ میلیون تومان'},
    {p:'اگر عکاسی حرفه‌ای، گیم سنگین یا کارهای خلاقانه انجام می‌دهی، پرچمدارها توجیه دارند. نوا اولترا 5G با دوربین ۲۰۰ مگاپیکسلی و شارژ ۱۲۰ واتی، آیفون ۱۶ پرو مکس با اکوسیستم اپل و گلکسی S25 اولترا با قلم S Pen، سه انتخاب اول بازارند.'},
    {tips:['گارانتی شرکتی و رجیستری را حتماً چک کن؛ گوشی بدون رجیستری بعد از یک ماه آنتن نمی‌دهد.','رم کمتر از ۸ گیگ برای استفاده ۲-۳ ساله کافی نیست.','اگر زیاد سفر می‌روی، باتری بالای ۵۰۰۰ و شارژ سریع اولویت اول است.','قبل از خرید، نظر کاربران واقعی را در صفحه محصول بخوان.']},
    {p:'جمع‌بندی: گران‌ترین گوشی همیشه بهترین انتخاب نیست؛ بهترین گوشی آن است که دقیقاً به اندازه نیازت باشد. اگر هنوز مرددی، از مشاوره رایگان نوا استفاده کن تا بر اساس بودجه و کارت، بهترین مدل را پیشنهاد بدهیم.'}
   ]},
  {t:'لپ‌تاپ گیمینگ یا اولترابوک؟ کدام برای توست؟',d:'مقایسه کامل قدرت، وزن، باتری و قیمت تا انتخاب درستی بین این دو دنیا داشته باشی.',seed:'images/blog-lp.jpg',date:'۱۰ شهریور ۱۴۰۵',read:'۵ دقیقه',cat:'مقایسه و بررسی',
   body:[
    {p:'یکی از رایج‌ترین دوراهی‌های خریداران لپ‌تاپ همین است: قدرت خام گیمینگ یا ظرافت و شارژدهی اولترابوک؟ پاسخ به سبک زندگی‌ات بستگی دارد، نه به مشخصات روی کاغذ. بیا سه تفاوت کلیدی را مرور کنیم.'},
    {h:'۱. قدرت پردازش و گرافیک'},
    {p:'لپ‌تاپ‌های گیمینگ مثل نوا رپتور با کارت گرافیک RTX و پردازنده پرمصرف، برای بازی، رندر سه‌بعدی، تدوین 4K و برنامه‌نویسی سنگین ساخته شده‌اند. اولترابوک‌ها مثل نوا ایر ۱۳ اما با گرافیک مجتمع، برای کارهای اداری، وب، آفیس و طراحی سبک کاملاً کافی‌اند و بی‌صدا کار می‌کنند.'},
    {h:'۲. وزن، ضخامت و باتری'},
    {p:'اینجا اولترابوک بی‌رقیب است: حدود ۱ کیلوگرم وزن و تا ۱۸ ساعت شارژدهی، یعنی یک روز کامل دانشگاه یا سفر بدون شارژر. لپ‌تاپ گیمینگ معمولاً بالای ۲.۵ کیلوگرم است و زیر بار سنگین ۲-۳ ساعت بیشتر دوام نمی‌آورد؛ عملاً همیشه به پریز نیاز دارد.'},
    {h:'۳. قیمت و آینده‌نگری'},
    {p:'با بودجه یکسان، گیمینگ قدرت بیشتری می‌دهد اما اولترابوک تجربه حمل بهتری. اگر کارت ترکیبی است — مثلاً دانشجوی معماری که هم رندر می‌گیرد هم لپ‌تاپ را هر روز حمل می‌کند — مدل‌های میانی مثل نوا بوک پرو ۱۶ تعادل خوبی بین این دو دنیا برقرار می‌کنند.'},
    {tips:['گیمری؟ فقط گیمینگ؛ گرافیک مجتمع برای بازی‌های جدید کافی نیست.','زیاد جابه‌جا می‌شوی؟ وزن زیر ۱.۵ کیلوگرم را در اولویت بگذار.','به کیبورد و نمایشگر بیشتر از پردازنده اهمیت بده؛ هر روز با آن‌ها سروکار داری.']},
    {p:'نتیجه: اگر کلمه «بازی» یا «رندر» در کارت هست، گیمینگ بخر؛ در غیر این صورت سبکی و باتری اولترابوک هر روز لبخندت را بیشتر می‌کند.'}
   ]},
  {t:'همه‌چیز درباره نویز کنسلینگ هدفون‌ها',d:'ANC چطور کار می‌کند؟ آیا ارزش هزینه بیشتر را دارد؟ پاسخ همه سوالاتت اینجاست.',seed:'images/blog-hp.jpg',date:'۲ شهریور ۱۴۰۵',read:'۶ دقیقه',cat:'آموزش',
   body:[
    {p:'حذف نویز فعال یا ANC یکی از مهم‌ترین فناوری‌های هدفون‌های امروزی است؛ همان چیزی که صدای مترو، هواپیما و اداره شلوغ را محو می‌کند. اما واقعاً چطور کار می‌کند و آیا ارزش پرداخت هزینه بیشتر را دارد؟'},
    {h:'ANC چطور کار می‌کند؟'},
    {p:'میکروفون‌های روی هدفون، صدای محیط را می‌شنوند و پردازنده در چند میلی‌ثانیه، موج صوتی «معکوس» آن را تولید می‌کند. وقتی این دو موج به هم می‌رسند، همدیگر را خنثی می‌کنند و سکوت به گوش می‌رسد. هرچه میکروفون‌ها بیشتر و پردازش سریع‌تر باشد — مثل نوا سایلنس Max با سیستم نسل چهارم — حذف نویز عمیق‌تر است.'},
    {h:'چه صداهایی حذف می‌شوند؟'},
    {p:'ANC در حذف صداهای یکنواخت و بم عالی عمل می‌کند: غرش موتور هواپیما، صدای مترو، کولر و ترافیک. اما صداهای ناگهانی و زیر — مثل صحبت آدم‌ها یا بوق ماشین — کمتر حذف می‌شوند. برای تمرکز در محیط شلوغ، ترکیب ANC با یک موسیقی ملایم بهترین نتیجه را می‌دهد.'},
    {h:'آیا ارزش خرید دارد؟'},
    {p:'اگر روزانه در مسیر پر سروصدا هستی، زیاد سفر می‌کنی یا در فضای اشتراکی کار می‌کنی، جواب قطعاً بله است؛ کیفیت زندگی‌ات را عوض می‌کند. اما اگر بیشتر در خانه و سکوت موسیقی گوش می‌دهی، همان بودجه را صرف کیفیت درایور و راحتی هدفون کن.'},
    {tips:['برای پرواز و مترو، ANC اولویت اول است؛ برای خانه، کیفیت صدا.','قابلیت حالت شفافیت (Transparency) را چک کن تا بدون درآوردن هدفون بفهمی دورت چه خبر است.','باتری با ANC روشن معمولاً ۲۰ تا ۳۰ درصد کمتر می‌شود.']},
    {p:'پیشنهاد ما: نوا سایلنس Max برای بودجه متوسط و سونی WH-1000XM5 برای بهترین تجربه ممکن. هر دو در فروشگاه نوا با ۷ روز مهلت تست موجودند.'}
   ]},
  {t:'۱۰ ترفند افزایش عمر باتری ساعت هوشمند',d:'با این تنظیمات ساده، شارژدهی ساعتت را تا دو برابر بیشتر کن.',seed:'images/blog-wt.jpg',date:'۲۵ مرداد ۱۴۰۵',read:'۴ دقیقه',cat:'آموزش',
   body:[
    {p:'بزرگ‌ترین گلایه کاربران ساعت هوشمند، شارژدهی است. خبر خوب: با چند تنظیم ساده می‌توانی مصرف باتری را تا نصف کم کنی، بدون اینکه از امکانات اصلی محروم شوی. این ۱۰ ترفند را امتحان کن.'},
    {h:'تنظیمات نمایشگر؛ بزرگ‌ترین مصرف‌کننده'},
    {p:'نمایشگر همیشه‌روشن (AOD) به‌تنهایی تا ۴۰ درصد باتری می‌بلعد. اگر هر روز شارژ کردن برایت آزاردهنده است، AOD را خاموش کن و روشنایی را روی حالت خودکار بگذار. کاهش زمان روشن ماندن صفحه به ۵ ثانیه هم تأثیر محسوسی دارد.'},
    {h:'سنسورها و اتصالات را مدیریت کن'},
    {p:'پایش مداوم ضربان قلب، اکسیژن خون و استرس را فقط وقتی روشن بگذار که واقعاً استفاده می‌کنی. وای‌فای و GPS را هم در حالت آماده‌باش نگه ندار؛ GPS فقط موقع ورزش لازم است. اعلان‌های غیرضروری اپ‌ها را هم از اپلیکیشن موبایل غیرفعال کن.'},
    {tips:['نمایشگر همیشه‌روشن را خاموش کن؛ تا ۴۰٪ صرفه‌جویی.','روشنایی را روی خودکار بگذار.','پایش مداوم سلامتی را محدود به زمان ورزش کن.','GPS و وای‌فای را فقط موقع نیاز روشن کن.','واچ‌فیس‌های ساده و تیره مصرف کمتری دارند.','اعلان اپ‌های غیرضروری را ببند.','به‌روزرسانی نرم‌افزار را جدی بگیر؛ معمولاً بهینه‌سازی باتری دارد.','حالت ذخیره باتری شب‌ها را فعال کن.']},
    {p:'با همین چند تغییر ساده، ساعت‌هایی مثل نوا واچ S2 به‌راحتی از یک هفته به ۱۰ روز شارژدهی می‌رسند. اگر بعد از همه این‌ها هنوز راضی نیستی، شاید وقتش است سراغ مدل‌هایی با باتری بزرگ‌تر مثل هواوی واچ GT5 بروی.'}
   ]}
];
const TESTIS = [
  {n:'سارا محمدی',r:'خریدار گوشی نوا اولترا',t:'بسته‌بندی فوق‌العاده تمیز و ارسال سریع‌تر از چیزی که فکر می‌کردم. گوشی هم دقیقاً همون چیزی بود که تو سایت دیده بودم. حتماً دوباره خرید می‌کنم.',s:5,seed:'images/ava-sara.jpg'},
  {n:'امیر رضایی',r:'خریدار لپ‌تاپ رپتور',t:'قبل از خرید با پشتیبانی مشورت کردم و خیلی صبورانه راهنماییم کردن. لپ‌تاپ گیمینگ رو با تخفیف جشنواره گرفتم و راضیم. مرسی نوا!',s:5,seed:'images/ava-amir.jpg'},
  {n:'نگار کریمی',r:'خریدار هدفون سایلنس',t:'کیفیت هدفون عالیه و قیمتش از همه‌جا بهتر بود. مرجوعی ۷ روزه هم خیالم رو راحت کرده بود. تجربه خرید خیلی خوبی بود.',s:4,seed:'images/ava-negar.jpg'},
  {n:'مهدی احمدی',r:'خریدار ساعت S2',t:'سفارشم رو اکسپرس تهران سفارش دادم و همون روز رسید! بسته‌بندی شیک و فاکتور رسمی هم داشت. فروشگاه قابل اعتمادیه.',s:5,seed:'images/ava-mehdi.jpg'}
];
const FAQS = [
  {q:'هزینه و زمان ارسال چقدر است؟',a:'برای خریدهای بالای ۵ میلیون تومان، ارسال کاملاً رایگان است. سفارش‌های پیشتاز ۲ تا ۳ روز کاری و اکسپرس تهران همان روز تحویل داده می‌شود.'},
  {q:'آیا کالاها گارانتی و ضمانت اصالت دارند؟',a:'بله؛ تمام کالاهای نوا اورجینال با گارانتی رسمی شرکتی (۱۲ تا ۱۸ ماهه) عرضه می‌شوند و ۷ روز مهلت مرجوعی بدون قید و شرط دارند.'},
  {q:'چطور سفارشم را پیگیری کنم؟',a:'بعد از ثبت سفارش، یک کد پیگیری ۸ رقمی دریافت می‌کنی. از بخش «پیگیری سفارش» در بالای سایت یا حساب کاربری‌ات می‌توانی وضعیت را ببینی.'},
  {q:'آیا امکان خرید اقساطی وجود دارد؟',a:'بله؛ برای خریدهای بالای ۱۰ میلیون تومان می‌توانی با کارت‌های اعتباری بانکی در ۴ تا ۱۲ قسط خرید کنی. در مرحله پرداخت گزینه اقساط نمایش داده می‌شود.'},
  {q:'کد تخفیف را کجا وارد کنم؟',a:'در سبد خرید، کادر «کد تخفیف» را می‌بینی. کدهایی مثل WELCOME10 را آنجا وارد و دکمه اعمال را بزن تا تخفیف محاسبه شود.'},
  {q:'اگر کالای تحویلی مشکل داشت چه کنم؟',a:'تا ۷ روز فرصت داری از حساب کاربری‌ات درخواست مرجوعی ثبت کنی. همکاران ما برای بازپس‌گیری کالا و عودت وجه هماهنگ می‌کنند.'}
];
const SEED_REVIEWS = [
  {pid:1,name:'علی تهرانی',rate:5,text:'دوربینش فوق‌العاده‌ست، باتری هم راحت یک روز کامل جواب میده. بسته‌بندی هم خیلی شیک بود.',date:'۱۲ شهریور ۱۴۰۵'},
  {pid:1,name:'مریم حسینی',rate:4,text:'گوشی خوبیه ولی یکم سنگینه. در کل نسبت به قیمتش ارزش خرید بالایی داره.',date:'۵ شهریور ۱۴۰۵'},
  {pid:11,name:'رضا نادری',rate:5,text:'نویز کنسلینگش عالیه، تو مترو اصلاً صدای بیرون نمیاد. شدیداً پیشنهاد می‌کنم.',date:'۸ شهریور ۱۴۰۵'},
  {pid:8,name:'پارسا کاظمی',rate:5,text:'همه بازی‌ها رو روی اولترا بدون لگ اجرا می‌کنه. خنک‌کنندش هم خیلی خوب عمل می‌کنه.',date:'۱ شهریور ۱۴۰۵'}
];

/* ==========================================================
   2) UTILS
   ========================================================== */
const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];
const img = (src) => src; /* local AI image pack (images/) */
const fa = n => String(n).replace(/\d/g, d => '۰۱۲۳۴۵۶۷۸۹'[d]);
const grouped = n => Math.round(n).toLocaleString('en-US').replace(/,/g, '٬');
const faCommas = n => fa(Math.round(n || 0).toLocaleString('en-US'));
const money = n => fa(grouped(n)) + ' تومان';
const compactFa = n => {
  if (n >= 1000000) { const v = n/1000000; const s = v >= 10 ? Math.round(v) : (Math.round(v*10)/10); return fa(String(s).replace('.', '٫')) + ' میلیون'; }
  return fa(Math.round(n/1000)) + ' هزار';
};
const stars = r => Array.from({length:5}, (_,i) => `<i class="fa-${i < r ? 'solid' : 'regular'} fa-star"></i>`).join('');
const debounce = (fn, ms = 250) => { let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); }; };
const lockScroll = on => document.body.classList.toggle('locked', on);
const store = {
  get:(k,f)=>{ try{ const v = JSON.parse(localStorage.getItem(k)); return v ?? f; }catch{ return f; } },
  set:(k,v)=>localStorage.setItem(k, JSON.stringify(v))
};
const offPct = p => p.old ? Math.round((1 - p.price/p.old) * 100) : 0;
const byId = id => PRODUCTS.find(p => p.id === id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

document.addEventListener('error', e => {
  const t = e.target;
  if (t && t.tagName === 'IMG' && !t.dataset.fb){
    t.dataset.fb = '1';
    const m = (t.getAttribute('src') || '').match(/images\/(.+?)\.jpg/i);
    t.src = 'https://picsum.photos/seed/nvfb-' + (m ? m[1] : 'x') + '/700/700';
  }
}, true);

/* ==========================================================
   3) TOAST
   ========================================================== */
const Toast = {
  icons: { ok:'fa-circle-check', err:'fa-circle-exclamation', info:'fa-circle-info' },
  show(msg, type = 'info'){
    const el = document.createElement('div');
    el.className = `toast toast--${type}`;
    el.innerHTML = `<i class="fa-solid ${this.icons[type]}"></i><span>${msg}</span>`;
    $('#toastBox').appendChild(el);
    requestAnimationFrame(() => el.classList.add('show'));
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 500); }, 2800);
  }
};

/* ==========================================================
   4) THEME
   ========================================================== */
const Theme = {
  init(){ $('#themeToggle').addEventListener('click', () => this.toggle()); },
  toggle(){
    const dark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('nova-theme', dark ? 'dark' : 'light');
    Toast.show(dark ? 'حالت شب فعال شد' : 'حالت روز فعال شد', 'info');
  }
};

/* ==========================================================
   5) NAV / HEADER
   ========================================================== */
const Nav = {
  init(){
    const header = $('#header');
    const menu = $('#mobileMenu'), bd = $('#menuBackdrop'), burger = $('#burger');
    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      $('#scrollProgress').style.width = (h > 0 ? window.scrollY / h * 100 : 0) + '%';
      $('#backTop').classList.toggle('show', window.scrollY > 450);
      this.spy();
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    onScroll();
    const open  = () => { menu.classList.add('open'); bd.classList.add('show'); burger.setAttribute('aria-expanded','true'); lockScroll(true); };
    const close = () => { if(!menu.classList.contains('open'))return; menu.classList.remove('open'); bd.classList.remove('show'); burger.setAttribute('aria-expanded','false'); lockScroll(false); };
    burger.addEventListener('click', open);
    $('#menuClose').addEventListener('click', close);
    bd.addEventListener('click', close);
    $$('#mobileMenu [data-nav]').forEach(a => a.addEventListener('click', close));
    $('#backTop').addEventListener('click', () => window.scrollTo({ top:0, behavior:'smooth' }));
    $('#ctaBtn').addEventListener('click', () => $('#products').scrollIntoView({ behavior:'smooth' }));
    $('#mAccount').addEventListener('click', () => { close(); Auth.open(); });
    $('#mWish').addEventListener('click', () => { close(); Wish.open(); });
    $('#mTrack').addEventListener('click', () => { close(); Track.open(); });
    $('#chatBtn').addEventListener('click', () => {
      Toast.show('پشتیبانی آنلاین: سلام! چطور کمکتون کنم؟', 'info');
      $('#contact').scrollIntoView({ behavior:'smooth' });
    });
    this.closeMenu = close;
  },
  spy(){
    const y = window.scrollY + 200;
    $$('section[id]').forEach(sec => {
      const on = y >= sec.offsetTop && y < sec.offsetTop + sec.offsetHeight;
      $$(`.nav-link[href="#${sec.id}"]`).forEach(l => l.classList.toggle('active', on));
    });
  }
};

/* ==========================================================
   6) HERO SLIDER + COUNTDOWNS
   ========================================================== */
const Hero = {
  i:0, timer:null,
  init(){
    const slides = $$('#heroSlides .hero-slide');
    const dots = $('#heroDots');
    dots.innerHTML = slides.map((_,k)=>`<button data-h="${k}" class="${k===0?'on':''}" aria-label="اسلاید ${k+1}"></button>`).join('');
    $$('#heroDots button').forEach(b => b.addEventListener('click', () => this.go(+b.dataset.h, true)));
    const pv = $('#heroPrev'), nx = $('#heroNext');
    if (pv) pv.addEventListener('click', () => this.go(this.i - 1, true));
    if (nx) nx.addEventListener('click', () => this.go(this.i + 1, true));
    this.auto();
    $('#heroSlides').addEventListener('mouseenter', () => clearInterval(this.timer));
    $('#heroSlides').addEventListener('mouseleave', () => this.auto());
    Countdown.init();
  },
  go(k, manual=false){
    const slides = $$('#heroSlides .hero-slide');
    this.i = (k + slides.length) % slides.length;
    slides.forEach((s,idx)=>s.classList.toggle('active', idx===this.i));
    $$('#heroDots button').forEach((d,idx)=>d.classList.toggle('on', idx===this.i));
    if (manual){ clearInterval(this.timer); this.auto(); }
  },
  auto(){ clearInterval(this.timer); this.timer = setInterval(()=>this.go(this.i+1), 7000); }
};
const Countdown = {
  init(){
    let end = +store.get('nova-sale-end', 0);
    if (!end || end < Date.now()) { end = Date.now() + (2*24*3600 + 14*3600 + 22*60) * 1000; store.set('nova-sale-end', end); }
    const tick = () => {
      let d = Math.max(0, end - Date.now()) / 1000;
      const dd = Math.floor(d/86400), hh = Math.floor(d%86400/3600), mm = Math.floor(d%3600/60), ss = Math.floor(d%60);
      const set = (root, k, v) => { const el = root ? root.querySelector(`[data-cd="${k}"]`) : null; if (el) el.textContent = fa(String(v).padStart(2,'0')); };
      const h = $('#heroCountdown'), a = $('#amazingTimer');
      set(h,'d',dd); set(h,'h',hh); set(h,'m',mm); set(h,'s',ss);
      set(a,'h',dd*24+hh); set(a,'m',mm); set(a,'s',ss);
      /* pulse the seconds cell on every tick */
      $$('[data-cd="s"]').forEach(b => {
        const cell = b.closest('.cd-cell');
        if (!cell) return;
        cell.classList.remove('tick');
        void cell.offsetWidth;
        cell.classList.add('tick');
      });
    };
    tick(); setInterval(tick, 1000);
  }
};

/* ==========================================================
   7) TYPEWRITER
   ========================================================== */
const Typewriter = {
  words: ['طراحی بی‌نظیر', 'تجربه کاربری فوق‌العاده', 'سرعت و امنیت'],
  i: 0, j: 0, deleting: false,
  init(){ this.el = $('#typewriter'); if(this.el) this.tick(); },
  tick(){
    if(!this.el) return;
    const word = this.words[this.i];
    this.el.textContent = word.slice(0, this.j);
    let delay = this.deleting ? 45 : 105;
    if (!this.deleting && this.j === word.length){ delay = 1600; this.deleting = true; }
    else if (this.deleting && this.j === 0){ this.deleting = false; this.i = (this.i + 1) % this.words.length; delay = 320; }
    else { this.j += this.deleting ? -1 : 1; }
    setTimeout(() => this.tick(), delay);
  }
};

/* ==========================================================
   8) RIPPLE
   ========================================================== */
const Ripple = {
  init(){
    document.addEventListener('click', e => {
      const btn = e.target.closest('.ripple');
      if (!btn) return;
      const r = btn.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const wave = document.createElement('span');
      wave.className = 'ripple__wave';
      wave.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - r.left - size/2}px;top:${e.clientY - r.top - size/2}px`;
      btn.appendChild(wave);
      setTimeout(() => wave.remove(), 700);
    });
  }
};

/* ==========================================================
   9) HEADER SEARCH (inline + suggestions dropdown)
   ========================================================== */
const Search = {
  init(){
    this.wire('#searchInput', '#headSuggest', '#searchGo');
    this.wire('#searchInputM', '#headSuggestM', '#searchGoM');
    document.addEventListener('click', e => {
      if (!e.target.closest('.head-search')) this.hideAll();
    });
  },
  wire(inpSel, boxSel, goSel){
    const input = $(inpSel), box = $(boxSel);
    if (!input || !box) return;
    input.addEventListener('input', debounce(() => this.suggest(input.value.trim(), box), 200));
    input.addEventListener('focus', () => { if (input.value.trim()) this.suggest(input.value.trim(), box); });
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter' && input.value.trim()) this.go(input.value.trim());
    });
    const go = $(goSel);
    if (go) go.addEventListener('click', () => { if (input.value.trim()) this.go(input.value.trim()); });
    if (inpSel === '#searchInputM'){
      input.addEventListener('input', debounce(e => {
        $('#searchInput').value = e.target.value;
        Shop.state.q = e.target.value.trim().toLowerCase(); Shop.state.page = 1; Shop.render();
      }, 250));
    }
  },
  go(q){
    $('#searchInput').value = q;
    const m = $('#searchInputM'); if (m) m.value = q;
    Shop.setQuery(q); this.hideAll();
    $('#products').scrollIntoView({ behavior:'smooth' });
  },
  hideAll(){ $$('.head-suggest').forEach(b => { b.classList.add('hidden'); b.innerHTML = ''; }); },
  suggest(q, box){
    if (!q){ box.classList.add('hidden'); box.innerHTML = ''; return; }
    const ql = q.toLowerCase();
    const list = PRODUCTS.filter(p => p.title.toLowerCase().includes(ql) || p.brand.includes(q) || p.cat.includes(q)).slice(0,6);
    if (!list.length){ box.classList.remove('hidden'); box.innerHTML = `<div class="p-5 text-center text-sm text-[var(--muted)]">نتیجه‌ای برای «${esc(q)}» پیدا نشد</div>`; return; }
    box.classList.remove('hidden');
    box.innerHTML = list.map(p => `
      <button class="suggest-row" data-sug="${p.id}">
        <img src="${img(p.seeds[0],200)}" alt="">
        <span class="flex-1 min-w-0"><b class="block text-sm truncate">${p.title}</b><small class="text-xs text-[var(--muted)]">${p.cat} • ${p.brand}</small></span>
        <b class="text-sm text-nova-500 whitespace-nowrap">${money(p.price)}</b>
      </button>`).join('') +
      `<button class="suggest-row !text-nova-500 font-bold text-sm" data-sugall="${esc(q)}"><i class="fa-solid fa-magnifying-glass"></i> نمایش همه نتایج «${esc(q)}»</button>`;
    $$('[data-sug]', box).forEach(b => b.addEventListener('click', () => { this.hideAll(); QuickView.open(+b.dataset.sug); }));
    const all = $('[data-sugall]', box);
    if (all) all.addEventListener('click', () => this.go(q));
  },
  close(){ this.hideAll(); }
};

/* ==========================================================
   10) AMAZING + CATEGORIES
   ========================================================== */
const Amazing = {
  init(){
    const list = PRODUCTS.filter(p => p.old && p.stock > 0).sort((a,b)=>offPct(b)-offPct(a)).slice(0,10);
    $('#amazingRow').innerHTML = list.map(p => `
      <div class="mini-card" data-tilt>
        <div class="relative cursor-pointer" data-qv="${p.id}">
          <img src="${img(p.seeds[0],400)}" alt="${p.title}" loading="lazy">
          <span class="absolute top-2 right-2 off-badge">٪${fa(offPct(p))}</span>
        </div>
        <div class="pad">
          <b class="text-[13px] leading-6 block truncate">${p.title}</b>
          <div class="flex items-center justify-between mt-2">
            <span class="font-black text-nova-500 text-[15px]">${money(p.price)}</span>
            <button class="card__add !w-9 !h-9" data-add="${p.id}" aria-label="افزودن"><i class="fa-solid fa-cart-plus text-sm"></i></button>
          </div>
          <div class="card__old mt-1">${money(p.old)}</div>
          <div class="stock-bar"><i style="width:${Math.min(100, p.stock*7)}%"></i></div>
          <small class="text-[11px] text-[var(--muted)]">تنها ${fa(p.stock)} عدد باقی مانده</small>
        </div>
      </div>`).join('');
    this.bind($('#amazingRow'));
    $('#amazingAll').addEventListener('click', () => {
      Shop.state.onlyOff = true; $('#onlyOff').checked = true; Shop.state.page = 1; Shop.render();
      $('#products').scrollIntoView({ behavior:'smooth' });
    });
  },
  bind(root){
    $$('[data-qv]', root).forEach(b => b.addEventListener('click', () => QuickView.open(+b.dataset.qv)));
    $$('[data-add]', root).forEach(b => b.addEventListener('click', e => { e.stopPropagation(); Cart.add(+b.dataset.add); }));
  }
};
const Cats = {
  init(){
    $('#catCircles').innerHTML = CATS.map(c => {
      const n = PRODUCTS.filter(p=>p.cat===c.n).length;
      return `<div class="cat-circle" data-catgo="${c.n}">
        <span class="cat-circle__img"><img src="${img(c.seed,200)}" alt="${c.n}" loading="lazy"></span>
        <b>${c.n}</b><span>${fa(n)} کالا</span>
      </div>`;
    }).join('');
    this.bindPromo();
  },
  bindPromo(){
    $$('[data-catgo]').forEach(el => el.addEventListener('click', () => {
      Shop.setCat(el.dataset.catgo);
      $('#products').scrollIntoView({ behavior:'smooth' });
    }));
    $$('[data-goto-cat]').forEach(b => b.addEventListener('click', () => {
      Shop.setCat(b.dataset.gotoCat);
      $('#products').scrollIntoView({ behavior:'smooth' });
    }));
    $$('[data-offlink]').forEach(el => el.addEventListener('click', () => {
      Shop.setCat('all');
      Shop.state.onlyOff = true; Shop.state.page = 1;
      const t = $('#onlyOff'); if (t) t.checked = true;
      Shop.render();
      $('#products').scrollIntoView({ behavior:'smooth' });
    }));
  }
};

/* ==========================================================
   10b) SHOP-LAYOUT MODULES : MegaMenu / HomeTabs / Brands / Drawer / BottomNav
   ========================================================== */
const MegaMenu = {
  open:false, active:0,
  init(){
    this.menu = $('#megaMenu'); this.btn = $('#megaBtn');
    if (!this.menu || !this.btn) return;
    this.renderCats(); this.renderSub(0);
    this.btn.addEventListener('click', e => { e.stopPropagation(); this.toggle(); });
    document.addEventListener('click', e => {
      if (this.open && !e.target.closest('#megaMenu') && !e.target.closest('#megaBtn')) this.close();
    });
  },
  toggle(){ this.open ? this.close() : this.openMenu(); },
  openMenu(){ this.open = true; this.menu.classList.add('open'); this.btn.classList.add('on'); this.btn.setAttribute('aria-expanded','true'); },
  close(){ if (!this.open) return; this.open = false; this.menu.classList.remove('open'); this.btn.classList.remove('on'); this.btn.setAttribute('aria-expanded','false'); },
  renderCats(){
    $('#megaCats').innerHTML = CATS.map((c,i) => {
      const n = PRODUCTS.filter(p=>p.cat===c.n).length;
      return `<button class="mega-cat ${i===this.active?'on':''}" data-mc="${i}"><i class="fa-solid ${c.icon}"></i>${c.n}<small>${fa(n)} کالا</small></button>`;
    }).join('');
    $$('#megaCats .mega-cat').forEach(b => {
      const act = () => {
        this.active = +b.dataset.mc;
        $$('#megaCats .mega-cat').forEach(x => x.classList.remove('on'));
        b.classList.add('on'); this.renderSub(this.active);
      };
      b.addEventListener('mouseenter', act);
      b.addEventListener('click', act);
    });
  },
  renderSub(i){
    const c = CATS[i];
    const brands = [...new Set(PRODUCTS.filter(p=>p.cat===c.n).map(p=>p.brand))];
    const top = PRODUCTS.filter(p=>p.cat===c.n).sort((a,b)=>b.sold-a.sold).slice(0,3);
    $('#megaSub').innerHTML = `
      <h4><i class="fa-solid ${c.icon}"></i> ${c.n}
        <button class="sec-link !py-1.5 !px-3 !text-xs mr-auto" data-mall="${c.n}">مشاهده همه <i class="fa-solid fa-arrow-left"></i></button>
      </h4>
      <p class="filter-label">خرید بر اساس برند</p>
      <div class="mega-grid">${brands.map(b=>`<button class="mega-link" data-mbrand="${c.n}|${b}"><i class="fa-solid fa-copyright text-[var(--muted)]"></i>${b}</button>`).join('')}</div>
      <p class="filter-label mt-4">پرفروش‌ترین‌های این دسته</p>
      <div class="mega-grid">${top.map(p=>`<button class="mega-link" data-mp="${p.id}"><img src="${img(p.seeds[0],100)}" alt="">${p.title.slice(0,26)}…</button>`).join('')}</div>`;
    $$('#megaSub [data-mall]').forEach(b => b.onclick = () => { this.close(); Shop.setCat(b.dataset.mall); $('#products').scrollIntoView({behavior:'smooth'}); });
    $$('#megaSub [data-mbrand]').forEach(b => b.onclick = () => {
      const [cat, br] = b.dataset.mbrand.split('|');
      this.close(); Shop.setCat(cat);
      Shop.state.brand = br; Shop.state.page = 1;
      $$('#brandBar .brand-chip').forEach(x => x.classList.toggle('on', x.dataset.brand === br));
      Shop.render();
      $('#products').scrollIntoView({behavior:'smooth'});
    });
    $$('#megaSub [data-mp]').forEach(b => b.onclick = () => { this.close(); QuickView.open(+b.dataset.mp); });
  }
};

const HomeTabs = {
  tab:'best',
  init(){
    this.row = $('#homeTabRow');
    if (!this.row) return;
    $$('#homeTabs button').forEach(b => b.addEventListener('click', () => {
      $$('#homeTabs button').forEach(x => x.classList.remove('on'));
      b.classList.add('on'); this.tab = b.dataset.htab; this.render();
    }));
    this.render();
  },
  list(){
    if (this.tab === 'best') return [...PRODUCTS].sort((a,b) => b.sold - a.sold).slice(0,10);
    if (this.tab === 'new')  return [...PRODUCTS].sort((a,b) => a.added - b.added).slice(0,10);
    return PRODUCTS.filter(p => p.old).sort((a,b) => offPct(b) - offPct(a)).slice(0,10);
  },
  render(){
    this.row.innerHTML = this.list().map(p => `
      <div class="mini-card" data-tilt>
        <div class="relative cursor-pointer" data-qv="${p.id}">
          <img src="${img(p.seeds[0],400)}" alt="${p.title}" loading="lazy">
          ${p.old ? `<span class="absolute top-2 right-2 off-badge">٪${fa(offPct(p))}</span>` : (p.isNew ? `<span class="absolute top-2 right-2 p-badge p-badge--new">جدید</span>` : `<span class="absolute top-2 right-2 p-badge p-badge--hot">پرفروش</span>`)}
        </div>
        <div class="pad">
          <b class="text-[13px] leading-6 block truncate">${p.title}</b>
          <div class="text-amber-400 text-[11px] mt-1">${stars(p.rate)} <span class="text-[var(--muted)]">(${fa(p.sold)} فروش)</span></div>
          <div class="flex items-center justify-between mt-2">
            <span class="font-black text-nova-500 text-[15px]">${money(p.price)}</span>
            <button class="card__add !w-9 !h-9" data-add="${p.id}" aria-label="افزودن"><i class="fa-solid fa-cart-plus text-sm"></i></button>
          </div>
          ${p.old ? `<div class="card__old mt-1">${money(p.old)}</div>` : ''}
        </div>
      </div>`).join('');
    Amazing.bind(this.row);
    Tilt.bind();
    Carousel.reset('#homeTabRow');
  }
};

const BrandStrip = {
  init(){
    const box = $('#brandStrip');
    if (!box) return;
    box.innerHTML = BRANDS.map(b => {
      const n = PRODUCTS.filter(p => p.brand === b).length;
      const logoHtml = (b === 'نوا')
        ? `<img src="images/nova-icon.svg" alt="نوا" class="w-full h-full object-cover rounded-[18px]">`
        : esc(b[0]);
      return `<div class="brand-card" data-brandgo="${b}">
        <div class="brand-card__logo">${logoHtml}</div><b>${b}</b><span>${fa(n)} کالا</span>
      </div>`;
    }).join('');
    $$('[data-brandgo]').forEach(el => el.addEventListener('click', () => {
      const b = el.dataset.brandgo;
      Shop.state.brand = b; Shop.state.page = 1;
      $$('#brandBar .brand-chip').forEach(x => x.classList.toggle('on', x.dataset.brand === b));
      Shop.render();
      $('#products').scrollIntoView({ behavior:'smooth' });
    }));
  }
};

const FilterDrawer = {
  init(){
    const sb = $('#shopSidebar'), bd = $('#filterBackdrop');
    if (!sb) return;
    const open = (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      sb.classList.add('open');
      if (bd) bd.classList.add('show');
      lockScroll(true);
    };
    const close = (e) => {
      if (e) { e.preventDefault(); e.stopPropagation(); }
      sb.classList.remove('open');
      if (bd) bd.classList.remove('show');
      lockScroll(false);
    };
    const t = $('#filterToggle'); if (t) t.addEventListener('click', open);
    const c = $('#filterClose'); if (c) c.addEventListener('click', close);
    if (bd) bd.addEventListener('click', close);
    const mobApply = $('#filterApplyMobile'); if (mobApply) mobApply.addEventListener('click', close);
    this.open = open;
    this.close = close;
  }
};

const BottomNav = {
  init(){
    const b = (id, fn) => { const el = $(id); if (el) el.addEventListener('click', fn); };
    b('#bnHome', () => window.scrollTo({ top:0, behavior:'smooth' }));
    b('#bnCats', () => $('#cats').scrollIntoView({ behavior:'smooth' }));
    b('#bnCart', () => Cart.open());
    b('#bnWish', () => Wish.open());
    b('#bnAccount', () => Auth.open());
  }
};

/* ==========================================================
   10c) CAROUSEL (Senior Frontend implementation — 0ms delay, rock-solid RTL)
   ========================================================== */
const Carousel = {
  _up: {},
  initAll(){
    this.attach('#amazingRow', { light:true, step:234 });
    this.attach('#homeTabRow', { step:234 });
    this.attach('#catCircles', { step:122 });
    this.attach('#brandStrip', { step:162 });
  },

  step(el, customStep){
    if (customStep) {
      const visible = Math.max(1, Math.floor(el.clientWidth / customStep));
      return visible * customStep;
    }
    return Math.max(200, Math.floor(el.clientWidth * 0.75));
  },

  scroll(el, dir, stepSize){
    const s = this.step(el, stepSize);
    /* In RTL, next (forward) is negative X delta (-s), prev is positive (+s) */
    el.scrollBy({ left: -dir * s, behavior: 'smooth' });
  },

  attach(sel, opts = {}){
    const el = $(sel);
    if (!el || el.dataset.car) return;
    el.dataset.car = '1';

    const wrap = document.createElement('div');
    wrap.className = 'car-wrap' + (opts.light ? ' car-wrap--light' : '');
    el.parentNode.insertBefore(wrap, el);
    wrap.appendChild(el);

    const prev = document.createElement('button');
    prev.type = 'button';
    prev.className = 'car-btn car-prev';
    prev.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    prev.setAttribute('aria-label', 'قبلی');

    const next = document.createElement('button');
    next.type = 'button';
    next.className = 'car-btn car-next';
    next.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    next.setAttribute('aria-label', 'بعدی');

    wrap.appendChild(prev);
    wrap.appendChild(next);

    const update = () => {
      const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
      const currentScroll = Math.abs(el.scrollLeft);
      const need = maxScroll > 10;
      prev.style.display = need ? '' : 'none';
      next.style.display = need ? '' : 'none';
      prev.disabled = currentScroll <= 6;
      next.disabled = currentScroll >= maxScroll - 6;
    };

    this._up[sel] = update;

    prev.addEventListener('click', (e) => {
      e.preventDefault();
      this.scroll(el, -1, opts.step);
      setTimeout(update, 350);
    });

    next.addEventListener('click', (e) => {
      e.preventDefault();
      this.scroll(el, 1, opts.step);
      setTimeout(update, 350);
    });

    el.addEventListener('scroll', () => {
      requestAnimationFrame(update);
    }, { passive: true });

    window.addEventListener('resize', update);
    window.addEventListener('load', update);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(update);
    update();
    setTimeout(update, 300);

    if (opts.drag !== false) this.drag(el);
  },

  refresh(sel){
    const u = this._up[sel];
    if (u) u();
  },

  reset(sel){
    const el = $(sel);
    if (!el) return;
    el.scrollTo({ left: 0, behavior: 'auto' });
    this.refresh(sel);
  },

  drag(el){
    let down = false, sx = 0, scrollStart = 0, moved = false;
    el.addEventListener('pointerdown', e => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true;
      moved = false;
      sx = e.clientX;
      scrollStart = el.scrollLeft;
      el.classList.add('dragging');
    });

    window.addEventListener('pointermove', e => {
      if (!down) return;
      const dx = e.clientX - sx;
      if (Math.abs(dx) > 4) moved = true;
      if (!moved) return;
      e.preventDefault();
      el.scrollLeft = scrollStart - dx;
    });

    const stopDrag = () => {
      if (!down) return;
      down = false;
      el.classList.remove('dragging');
    };

    window.addEventListener('pointerup', stopDrag);
    window.addEventListener('pointercancel', stopDrag);

    el.addEventListener('click', e => {
      if (moved){
        e.stopPropagation();
        e.preventDefault();
        moved = false;
      }
    }, true);

    el.addEventListener('dragstart', e => e.preventDefault());
  }
};

const Blog = {
  i: 0,
  init(){
    this.modal = $('#blogModal'); this.bd = $('#blogBackdrop');
    if (!this.modal || !this.bd) return;
    $('#blogClose').addEventListener('click', () => this.close());
    this.bd.addEventListener('click', () => this.close());
  },
  open(i){
    this.i = (i + BLOGS.length) % BLOGS.length;
    const b = BLOGS[this.i];
    const box = $('.modal__box', this.modal);
    $('#blogBody').innerHTML = `
      <div class="article-hero">
        <img src="${img(b.seed, 1200)}" alt="${b.t}">
        <div class="article-hero__txt">
          <span class="chip !bg-white/15 !text-white !border-white/25"><i class="fa-solid fa-book-open"></i> ${b.cat || 'مجله نوا'}</span>
          <h2>${b.t}</h2>
          <div class="article-meta">
            <span><i class="fa-regular fa-calendar"></i> ${b.date}</span>
            <span><i class="fa-regular fa-clock"></i> ${b.read} مطالعه</span>
            <span><i class="fa-regular fa-user"></i> تحریریه نوا</span>
          </div>
        </div>
      </div>
      <div class="article-body">
        <p class="article-lead">${b.d}</p>
        ${(b.body || []).map(block => {
          if (block.h) return `<h3>${block.h}</h3>`;
          if (block.p) return `<p>${block.p}</p>`;
          if (block.tips) return `<div class="tip-box"><b><i class="fa-solid fa-lightbulb"></i> نکته‌های مهم</b><ul>${block.tips.map(t => `<li>${t}</li>`).join('')}</ul></div>`;
          return '';
        }).join('')}
        <div class="article-share">
          <span>این مقاله به کارت اومد؟ با دوستات به اشتراک بذار 🤝</span>
          <button id="blogShareBtn" class="trust-pill"><i class="fa-solid fa-share-nodes"></i> کپی لینک مقاله</button>
        </div>
        <div class="article-nav">
          <button id="blogPrev" class="btn-ghost !py-2.5 text-sm"><i class="fa-solid fa-chevron-right"></i> مقاله قبلی</button>
          <button id="blogNext" class="btn-ghost !py-2.5 text-sm">مقاله بعدی <i class="fa-solid fa-chevron-left"></i></button>
        </div>
        <h3>مطالب مرتبط</h3>
        <div class="rel-row">${BLOGS.map((r, k) => k === this.i ? '' : `
          <div class="rel-card !min-w-[180px]" data-brel="${k}">
            <img src="${img(r.seed, 300)}" alt="${r.t}" loading="lazy">
            <div class="pad"><b>${r.t}</b><span class="rel-sub">${r.read} مطالعه</span></div>
          </div>`).join('')}</div>
      </div>`;
    $('#blogShareBtn').addEventListener('click', () => {
      const url = location.origin + location.pathname + '#b-' + this.i;
      if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => Toast.show('لینک مقاله کپی شد 🔗', 'ok')).catch(() => Toast.show(url, 'info'));
      else Toast.show(url, 'info');
    });
    const jump = k => { this.open(k); box.scrollTop = 0; };
    $('#blogPrev').addEventListener('click', () => jump(this.i - 1));
    $('#blogNext').addEventListener('click', () => jump(this.i + 1));
    $$('[data-brel]').forEach(x => x.addEventListener('click', () => jump(+x.dataset.brel)));
    box.scrollTop = 0;
    this.modal.classList.add('open'); this.bd.classList.add('show'); lockScroll(true);
    history.replaceState(null, '', '#b-' + this.i);
  },
  close(){
    if (!this.modal || !this.modal.classList.contains('open')) return;
    this.modal.classList.remove('open'); this.bd.classList.remove('show'); lockScroll(false);
    history.replaceState(null, '', location.pathname);
  }
};

/* ==========================================================
   11) SHOP : FILTERS + SORT + PAGINATION + RENDER
   ========================================================== */
const PER_PAGE = 8;
const Shop = {
  state: { cat:'all', brand:'all', minPrice:0, maxPrice:120000000, minRate:0, q:'', sort:'default', onlyOff:false, onlyStock:true, page:1, view:'grid' },

  init(){
    this.grid = $('#productGrid');
    this.empty = $('#emptyState');
    this.renderBrands();
    this.bindFilters();
    this.bindPriceFilter();
    this.showSkeletons();
    setTimeout(() => this.render(), 700);
  },

  showSkeletons(){
    this.grid.innerHTML = Array.from({length:8}).map(() => `
      <div class="skeleton">
        <div class="sk-box" style="aspect-ratio:4/3"></div>
        <div class="p-4 space-y-3">
          <div class="sk-box h-4 rounded-md w-3/4"></div>
          <div class="sk-box h-3 rounded-md w-1/2"></div>
          <div class="sk-box h-7 rounded-md w-1/3"></div>
        </div>
      </div>`).join('');
    $('#pagination').innerHTML = '';
  },

  renderBrands(){
    $('#brandBar').innerHTML = `<button class="brand-chip on" data-brand="all">همه برندها</button>` +
      BRANDS.map(b => `<button class="brand-chip" data-brand="${b}">${b}</button>`).join('');
    $$('#brandBar .brand-chip').forEach(c => c.addEventListener('click', () => {
      $$('#brandBar .brand-chip').forEach(x => x.classList.remove('on'));
      c.classList.add('on');
      this.state.brand = c.dataset.brand; this.state.page = 1; this.render();
    }));
  },

  setCat(cat){
    this.state.cat = cat; this.state.page = 1;
    $$('#categoryBar .cat-btn').forEach(x => x.classList.toggle('is-active', x.dataset.cat === cat));
    this.render();
  },
  setQuery(q){
    this.state.q = q.toLowerCase(); this.state.page = 1;
    $('#searchInput').value = q;
    const m = $('#searchInputM'); if (m) m.value = q;
    this.render();
  },

  bindPriceFilter(){
    const minIn = $('#priceMinInput'), maxIn = $('#priceMaxInput');
    const applyBtn = $('#applyPriceBtn'), resetBtn = $('#resetPriceBtn');
    const tierBtns = $$('#priceTierList .price-tier-btn');

    const MAX_LIMIT = 120000000;

    const parseVal = v => {
      if (typeof v === 'number') return v;
      const s = String(v || '').replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[^\d]/g, '');
      return +s || 0;
    };

    const updateUI = (minVal, maxVal, syncInputs = true) => {
      minVal = Math.max(0, Math.min(minVal, MAX_LIMIT));
      maxVal = Math.max(0, Math.min(maxVal, MAX_LIMIT));
      if (minVal > maxVal) { const tmp = minVal; minVal = maxVal; maxVal = tmp; }

      this.state.minPrice = minVal;
      this.state.maxPrice = maxVal;

      if (syncInputs){
        if (minIn) minIn.value = faCommas(minVal);
        if (maxIn) maxIn.value = faCommas(maxVal);
      }

      // Reset button visibility
      if (resetBtn){
        resetBtn.classList.toggle('hidden', minVal === 0 && maxVal === MAX_LIMIT);
      }

      // Highlight active price tier
      tierBtns.forEach(btn => {
        const bMin = +btn.dataset.min, bMax = +btn.dataset.max;
        const matches = (minVal === bMin && maxVal === bMax);
        btn.classList.toggle('active', matches);
      });
    };

    this.updatePriceFilter = updateUI;

    // Price tier clicks
    tierBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const bMin = +btn.dataset.min, bMax = +btn.dataset.max;
        updateUI(bMin, bMax, true);
        this.state.page = 1;
        this.render();
      });
    });

    // Custom price apply
    const applyCustom = () => {
      let minVal = parseVal(minIn ? minIn.value : 0);
      let maxVal = parseVal(maxIn ? maxIn.value : MAX_LIMIT);
      if (maxVal === 0 && minVal > 0) maxVal = MAX_LIMIT;
      if (minVal > maxVal) { const tmp = minVal; minVal = maxVal; maxVal = tmp; }
      updateUI(minVal, maxVal, true);
      this.state.page = 1;
      this.render();
      Toast.show(`فیلتر قیمت: از ${compactFa(minVal)} تا ${compactFa(maxVal)}`, 'ok');
    };

    if (applyBtn) applyBtn.addEventListener('click', applyCustom);
    if (minIn) minIn.addEventListener('keydown', e => { if (e.key === 'Enter') applyCustom(); });
    if (maxIn) maxIn.addEventListener('keydown', e => { if (e.key === 'Enter') applyCustom(); });

    // Reset price filter
    if (resetBtn){
      resetBtn.addEventListener('click', () => {
        updateUI(0, MAX_LIMIT, true);
        this.state.page = 1;
        this.render();
        Toast.show('فیلتر قیمت بازنشانی شد', 'info');
      });
    }

    // Initial sync
    updateUI(this.state.minPrice, this.state.maxPrice, true);
  },

  bindFilters(){
    $$('#categoryBar .cat-btn').forEach(b => b.addEventListener('click', () => this.setCat(b.dataset.cat)));
    $$('#ratingFilter button').forEach(b => b.addEventListener('click', () => {
      const s = +b.dataset.star;
      this.state.minRate = (this.state.minRate === s) ? 0 : s;
      this.state.page = 1; this.paintStars(); this.render();
    }));
    $('#clearRating').addEventListener('click', () => { this.state.minRate = 0; this.state.page = 1; this.paintStars(); this.render(); });
    $('#searchInput').addEventListener('input', debounce(e => {
      this.state.q = e.target.value.trim().toLowerCase(); this.state.page = 1; this.render();
    }, 250));
    $('#sortSelect').addEventListener('change', e => { this.state.sort = e.target.value; this.state.page = 1; this.render(); });
    $('#onlyOff').addEventListener('change', e => { this.state.onlyOff = e.target.checked; this.state.page = 1; this.render(); });
    $('#onlyStock').addEventListener('change', e => { this.state.onlyStock = e.target.checked; this.state.page = 1; this.render(); });
    $$('#viewToggle button').forEach(b => b.addEventListener('click', () => {
      $$('#viewToggle button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      this.state.view = b.dataset.view;
      this.grid.classList.toggle('list-view', this.state.view === 'list');
    }));
    $('#resetFilters').addEventListener('click', () => {
      this.state = { cat:'all', brand:'all', minPrice:0, maxPrice:120000000, minRate:0, q:'', sort:'default', onlyOff:false, onlyStock:true, page:1, view:this.state.view };
      $$('#categoryBar .cat-btn').forEach((x,i) => x.classList.toggle('is-active', i === 0));
      $$('#brandBar .brand-chip').forEach((x,i) => x.classList.toggle('on', i === 0));
      if (this.updatePriceFilter) this.updatePriceFilter(0, 120000000, true);
      $('#searchInput').value = ''; $('#sortSelect').value = 'default';
      const sm = $('#searchInputM'); if (sm) sm.value = '';
      $('#onlyOff').checked = false; $('#onlyStock').checked = true;
      this.paintStars(); this.render();
      Toast.show('فیلترها بازنشانی شد', 'info');
    });
  },

  paintStars(){
    $$('#ratingFilter button').forEach(b =>
      b.classList.toggle('on', +b.dataset.star <= this.state.minRate));
  },

  filtered(){
    const s = this.state;
    let list = PRODUCTS.filter(p =>
      (s.cat === 'all' || p.cat === s.cat) &&
      (s.brand === 'all' || p.brand === s.brand) &&
      p.price >= s.minPrice &&
      p.price <= s.maxPrice &&
      p.rate >= s.minRate &&
      (!s.onlyOff || p.old) &&
      (!s.onlyStock || p.stock > 0) &&
      (!s.q || p.title.toLowerCase().includes(s.q) || p.brand.includes(s.q))
    );
    if (s.sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
    if (s.sort === 'price-desc') list.sort((a,b) => b.price - a.price);
    if (s.sort === 'rate-desc')  list.sort((a,b) => b.rate - a.rate || b.rc - a.rc);
    if (s.sort === 'off-desc')   list.sort((a,b) => offPct(b) - offPct(a));
    if (s.sort === 'sold-desc')  list.sort((a,b) => b.sold - a.sold);
    if (s.sort === 'new-desc')   list.sort((a,b) => a.added - b.added);
    return list;
  },

  render(){
    const list = this.filtered();
    const pages = Math.max(1, Math.ceil(list.length / PER_PAGE));
    if (this.state.page > pages) this.state.page = pages;
    const start = (this.state.page - 1) * PER_PAGE;
    const slice = list.slice(start, start + PER_PAGE);

    $('#resultCount').textContent = `${fa(list.length)} محصول`;
    const crumb = $('#crumbCat');
    if (crumb) crumb.textContent = (this.state.cat === 'all' ? 'همه کالاها' : this.state.cat) +
      (this.state.brand !== 'all' ? ' • ' + this.state.brand : '') +
      (this.state.q ? ` • جستجو: ${this.state.q}` : '');
    this.empty.classList.toggle('hidden', list.length > 0);
    this.grid.classList.toggle('list-view', this.state.view === 'list');

    this.grid.innerHTML = slice.map((p, i) => {
      const off = offPct(p);
      const soldOut = p.stock === 0;
      return `
      <article class="card ${soldOut?'soldout':''}" style="animation-delay:${i * 55}ms" data-tilt data-id="${p.id}">
        <div class="card__media">
          <img class="card__img" src="${img(p.seeds[0], 600)}" alt="${p.title}" loading="lazy">
          <div class="card__badges">
            ${off ? `<span class="p-badge p-badge--off">٪${fa(off)} تخفیف</span>` : ''}
            ${p.isNew && !soldOut ? `<span class="p-badge p-badge--new">جدید</span>` : ''}
            ${p.isHot && !soldOut ? `<span class="p-badge p-badge--hot">پرفروش</span>` : ''}
            ${soldOut ? `<span class="p-badge p-badge--sold">ناموجود</span>` : ''}
          </div>
          <div class="card__tools">
            <button class="card__tool fav ${Wish.has(p.id)?'on':''}" data-fav="${p.id}" aria-label="علاقه‌مندی"><i class="fa-${Wish.has(p.id)?'solid':'regular'} fa-heart"></i></button>
            <button class="card__tool cmp ${Compare.has(p.id)?'on':''}" data-cmp="${p.id}" aria-label="مقایسه"><i class="fa-solid fa-scale-balanced"></i></button>
          </div>
          <div class="card__overlay">
            <button class="card__qv" data-qv="${p.id}"><i class="fa-regular fa-eye"></i> مشاهده سریع</button>
          </div>
        </div>
        <div class="card__body">
          <div class="flex items-center gap-2 text-[11.5px] text-[var(--muted)]"><span>${p.cat}</span>•<span>${p.brand}</span></div>
          <h3 class="card__title mt-1">${p.title}</h3>
          <p class="card__desc">${p.desc}</p>
          <div class="card__stars">${stars(p.rate)}<span class="text-[var(--muted)] mr-1">(${fa(p.rate)}.۰ • ${fa(p.rc)} دیدگاه)</span></div>
          ${this.stockLine(p)}
          <div class="flex items-center justify-between mt-3">
            <span><span class="card__price">${money(p.price)}</span>${p.old?`<span class="card__old block">${money(p.old)}</span>`:''}</span>
            ${soldOut
              ? `<button class="card__add opacity-40" data-notify="${p.id}" aria-label="خبرم کن" title="موجود شد خبرم کن"><i class="fa-solid fa-bell"></i></button>`
              : `<button class="card__add" data-add="${p.id}" aria-label="افزودن به سبد"><i class="fa-solid fa-cart-plus"></i></button>`}
          </div>
        </div>
      </article>`;
    }).join('');

    this.renderPages(pages);
    Tilt.bind();
    this.bindCards();
  },

  stockLine(p){
    if (p.stock === 0) return `<p class="card__stock out"><i class="fa-solid fa-circle-xmark"></i> ناموجود</p>`;
    if (p.stock <= 10) return `<p class="card__stock low"><i class="fa-solid fa-fire"></i> تنها ${fa(p.stock)} عدد باقی مانده!</p>`;
    return `<p class="card__stock ok"><i class="fa-solid fa-circle-check"></i> موجود در انبار</p>`;
  },

  renderPages(pages){
    const box = $('#pagination');
    if (pages <= 1){ box.innerHTML = ''; return; }
    const cur = this.state.page;
    let nums = [];
    for (let i = 1; i <= pages; i++){
      if (i === 1 || i === pages || Math.abs(i - cur) <= 1) nums.push(i);
      else if (nums[nums.length-1] !== '…') nums.push('…');
    }
    box.innerHTML =
      `<button class="page-btn" data-pg="${cur-1}" ${cur===1?'disabled':''}><i class="fa-solid fa-chevron-right"></i></button>` +
      nums.map(n => n === '…' ? `<span class="text-[var(--muted)]">…</span>` :
        `<button class="page-btn ${n===cur?'on':''}" data-pg="${n}">${fa(n)}</button>`).join('') +
      `<button class="page-btn" data-pg="${cur+1}" ${cur===pages?'disabled':''}><i class="fa-solid fa-chevron-left"></i></button>`;
    $$('[data-pg]', box).forEach(b => b.addEventListener('click', () => {
      if (b.disabled) return;
      this.state.page = +b.dataset.pg; this.render();
      $('#products').scrollIntoView({ behavior:'smooth' });
    }));
  },

  bindCards(){
    $$('#productGrid [data-qv]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); QuickView.open(+b.dataset.qv); }));
    $$('#productGrid [data-add]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); Cart.add(+b.dataset.add); }));
    $$('#productGrid [data-fav]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); Wish.toggle(+b.dataset.fav); }));
    $$('#productGrid [data-cmp]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); Compare.toggle(+b.dataset.cmp); }));
    $$('#productGrid [data-notify]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); Toast.show('موجود شد بهت خبر می‌دیم 🔔', 'ok'); }));
  }
};

/* ==========================================================
   12) TILT 3D
   ========================================================== */
const Tilt = {
  MAX: 9,
  bind(){
    if (window.matchMedia('(hover: none)').matches) return;
    $$('[data-tilt]').forEach(el => {
      if (el.dataset.tiltBound) return;
      el.dataset.tiltBound = '1';
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width  - .5;
        const py = (e.clientY - r.top)  / r.height - .5;
        el.style.transform = `perspective(900px) rotateY(${px * this.MAX * 2}deg) rotateX(${-py * this.MAX * 2}deg) scale(1.035)`;
      });
      el.addEventListener('mouseleave', () => { el.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale(1)'; });
    });
  }
};

/* ==========================================================
   13) REVIEWS STORE
   ========================================================== */
const Reviews = {
  KEY: 'nova-reviews',
  all(){ return store.get(this.KEY, null) || this.seed(); },
  seed(){ const o = {}; SEED_REVIEWS.forEach(r => { (o[r.pid] = o[r.pid] || []).push(r); }); store.set(this.KEY, o); return o; },
  of(pid){ return (this.all()[pid] || []); },
  add(pid, rev){
    const o = this.all(); (o[pid] = o[pid] || []).unshift(rev); store.set(this.KEY, o);
    const p = byId(pid); if (p){ p.rc++; }
  }
};
/* ==========================================================
   14) QUICK VIEW MODAL + SLIDER + TABS + REVIEWS
   ========================================================== */
const QuickView = {
  idx: 0, product: null, qty: 1, color: null, revRate: 0,

  init(){
    this.modal = $('#quickModal'); this.bd = $('#modalBackdrop');
    $('#modalClose').addEventListener('click', () => this.close());
    this.bd.addEventListener('click', () => this.close());
    $('#mvPrev').addEventListener('click', () => this.go(this.idx - 1));
    $('#mvNext').addEventListener('click', () => this.go(this.idx + 1));
    $('#mvAdd').addEventListener('click', () => { Cart.add(this.product.id, this.qty); this.close(); });
    $('#mvInc').addEventListener('click', () => { this.qty = Math.min(this.product.stock || 1, this.qty + 1); $('#mvQty').textContent = fa(this.qty); });
    $('#mvDec').addEventListener('click', () => { this.qty = Math.max(1, this.qty - 1); $('#mvQty').textContent = fa(this.qty); });
    $('#mvFav').addEventListener('click', () => Wish.toggle(this.product.id, true));
    $('#mvCmp').addEventListener('click', () => Compare.toggle(this.product.id));
    $('#mvShare').addEventListener('click', () => this.share());
    $$('#mvTabs button').forEach(b => b.addEventListener('click', () => {
      $$('#mvTabs button').forEach(x => x.classList.remove('on'));
      b.classList.add('on');
      $$('#quickModal .tab-pane').forEach(p => p.classList.toggle('on', p.dataset.pane === b.dataset.tab));
    }));
    $$('#revStars button').forEach(b => b.addEventListener('click', () => {
      this.revRate = +b.dataset.star;
      $$('#revStars button').forEach(x => x.classList.toggle('on', +x.dataset.star <= this.revRate));
    }));
    $('#revSubmit').addEventListener('click', () => this.submitReview());
  },

  open(id){
    const p = byId(id);
    if (!p) return;
    this.product = p; this.idx = 0; this.qty = 1; this.revRate = 0;
    $$('#revStars button').forEach(x => x.classList.remove('on'));
    $('#revText').value = '';
    $('#mvQty').textContent = fa(1);

    $('#mvCat').innerHTML = `<i class="fa-solid fa-tag"></i> ${p.cat} • ${p.brand}`;
    $('#mvSku').textContent = p.sku;
    $('#mvTitle').textContent = p.title;
    $('#mvStars').innerHTML = `${stars(p.rate)}<span class="text-[var(--muted)] text-xs mr-2">${fa(p.rate)}.۰ از ۵ • ${fa(p.rc)} دیدگاه • ${fa(p.sold)} فروش</span>`;
    const st = $('#mvStockLine');
    if (p.stock === 0){ st.className = 'card__stock out'; st.innerHTML = '<i class="fa-solid fa-circle-xmark"></i> ناموجود — به‌زودی شارژ می‌شود'; }
    else if (p.stock <= 10){ st.className = 'card__stock low'; st.innerHTML = `<i class="fa-solid fa-fire"></i> تنها ${fa(p.stock)} عدد در انبار باقی مانده`; }
    else { st.className = 'card__stock ok'; st.innerHTML = '<i class="fa-solid fa-circle-check"></i> موجود در انبار نوا'; }

    const off = offPct(p);
    $('#mvPrice').textContent = money(p.price);
    $('#mvOld').textContent = p.old ? money(p.old) : '';
    $('#mvOff').textContent = off ? `٪${fa(off)} تخفیف` : '';
    $('#mvOff').style.display = off ? '' : 'none';
    $('#mvBadge').textContent = off ? `٪${fa(off)} تخفیف` : (p.isNew ? 'جدید' : (p.isHot ? 'پرفروش' : p.cat));
    $('#mvDesc').textContent = p.desc;
    $('#mvFeatures').innerHTML = p.features.map(f => `<li class="feat-li"><i class="fa-solid fa-circle-check"></i>${f}</li>`).join('');
    $('#mvSpecs').innerHTML = Object.entries(p.specs).map(([k,v]) => `<tr><td>${k}</td><td><b>${v}</b></td></tr>`).join('');

    const cols = COLORS[p.colors] || COLORS.acc;
    this.color = cols[0].n;
    $('#mvColors').innerHTML = cols.map((c,i) => `<button class="color-dot ${i===0?'on':''}" data-col="${c.n}" title="${c.n}" style="background:${c.c}" aria-label="${c.n}"></button>`).join('');
    $$('#mvColors .color-dot').forEach(b => b.addEventListener('click', () => {
      $$('#mvColors .color-dot').forEach(x => x.classList.remove('on'));
      b.classList.add('on'); this.color = b.dataset.col;
    }));

    $('#mvAdd').disabled = p.stock === 0;
    $('#mvAdd').style.opacity = p.stock === 0 ? '.5' : '';
    $('#mvAdd span').textContent = p.stock === 0 ? 'ناموجود' : 'افزودن به سبد';
    this.paintFav();

    $('#mvSlider').innerHTML = p.seeds.map(s => `<img src="${img(s, 800)}" alt="${p.title}">`).join('');
    $('#mvDots').innerHTML = p.seeds.map((_, i) => `<button data-dot="${i}" class="${i === 0 ? 'on' : ''}" aria-label="تصویر ${i+1}"></button>`).join('');
    $$('#mvDots button').forEach(d => d.addEventListener('click', () => this.go(+d.dataset.dot)));
    const th = document.createElement('div');
    th.className = 'thumbs px-1';
    $$('#quickModal .thumbs').forEach(t => t.remove());

    this.renderReviews();
    this.renderRelated();
    $$('#mvTabs button').forEach((x,i) => x.classList.toggle('on', i === 0));
    $$('#quickModal .tab-pane').forEach((pane,i) => pane.classList.toggle('on', i === 0));

    this.go(0);
    Recent.push(p.id);
    this.modal.classList.add('open'); this.bd.classList.add('show'); lockScroll(true);
    history.replaceState(null, '', '#p-' + p.id);
  },

  paintFav(){
    const on = Wish.has(this.product.id);
    $('#mvFav').innerHTML = `<i class="fa-${on?'solid':'regular'} fa-heart"></i>`;
    $('#mvFav').style.color = on ? '#f43f5e' : '';
    $('#mvFav').style.borderColor = on ? '#f43f5e' : '';
  },

  renderReviews(){
    const list = Reviews.of(this.product.id);
    $('#mvRevCount').textContent = list.length ? `(${fa(list.length)})` : '';
    $('#mvReviews').innerHTML = list.length ? list.map(r => `
      <div class="review-row">
        <div class="review-head"><b>${esc(r.name)}</b><time>${esc(r.date)}</time></div>
        <div class="text-amber-400 text-xs mt-1.5">${stars(r.rate)}</div>
        <p class="text-[13px] leading-7 mt-2 text-[var(--muted)]">${esc(r.text)}</p>
      </div>`).join('')
      : `<p class="text-sm text-[var(--muted)]">هنوز دیدگاهی ثبت نشده؛ اولین نفر باش! ✍️</p>`;
  },

  submitReview(){
    const txt = $('#revText').value.trim();
    if (!this.revRate) return Toast.show('لطفاً امتیاز (ستاره) بده', 'err');
    if (txt.length < 5) return Toast.show('متن دیدگاه خیلی کوتاه است', 'err');
    const u = Auth.current();
    Reviews.add(this.product.id, { name: u ? u.name : 'کاربر نوا', rate: this.revRate, text: txt, date: 'امروز' });
    $('#revText').value = ''; this.revRate = 0;
    $$('#revStars button').forEach(x => x.classList.remove('on'));
    this.renderReviews();
    Toast.show('دیدگاهت ثبت شد، ممنون! 💬', 'ok');
  },

  renderRelated(){
    const p = this.product;
    const rel = PRODUCTS.filter(x => x.id !== p.id && (x.cat === p.cat || x.brand === p.brand)).slice(0,8);
    $('#mvRelated').innerHTML = rel.map(r => `
      <div class="rel-card" data-rel="${r.id}">
        <img src="${img(r.seeds[0],300)}" alt="${r.title}" loading="lazy">
        <div class="pad"><b>${r.title}</b><span>${money(r.price)}</span></div>
      </div>`).join('');
    $$('[data-rel]').forEach(b => b.addEventListener('click', () => this.open(+b.dataset.rel)));
  },

  share(){
    const url = location.origin + location.pathname + '#p-' + this.product.id;
    if (navigator.clipboard) navigator.clipboard.writeText(url).then(() => Toast.show('لینک محصول کپی شد 🔗', 'ok')).catch(() => Toast.show(url, 'info'));
    else Toast.show(url, 'info');
  },

  go(i){
    const n = this.product.seeds.length;
    this.idx = (i + n) % n;
    $('#mvSlider').style.transform = `translateX(${this.idx * 100}%)`;
    $$('#mvDots button').forEach((d, k) => d.classList.toggle('on', k === this.idx));
  },

  close(){
    if (!this.modal.classList.contains('open')) return;
    this.modal.classList.remove('open'); this.bd.classList.remove('show'); lockScroll(false);
    history.replaceState(null, '', location.pathname);
  }
};

/* ==========================================================
   15) WISHLIST
   ========================================================== */
const Wish = {
  KEY: 'nova-wish',
  items: [],
  init(){
    this.items = store.get(this.KEY, []);
    $('#wishOpen').addEventListener('click', () => this.open());
    $('#wishClose').addEventListener('click', () => this.close());
    $('#wishBackdrop').addEventListener('click', () => this.close());
    $('#wishToCart').addEventListener('click', () => {
      if (!this.items.length) return Toast.show('علاقه‌مندی‌ها خالی است', 'err');
      let n = 0;
      this.items.forEach(id => { const p = byId(id); if (p && p.stock > 0){ Cart.add(id, 1, true); n++; } });
      Toast.show(`${fa(n)} کالا به سبد اضافه شد`, 'ok');
    });
    this.paint();
  },
  has(id){ return this.items.includes(id); },
  toggle(id, fromModal=false){
    const p = byId(id);
    if (this.has(id)){ this.items = this.items.filter(x => x !== id); Toast.show('از علاقه‌مندی‌ها حذف شد', 'info'); }
    else { this.items.push(id); Toast.show(`«${p.title}» به علاقه‌مندی‌ها اضافه شد ❤️`, 'ok'); }
    store.set(this.KEY, this.items);
    this.paint(); this.syncHearts();
    if (fromModal && QuickView.product) QuickView.paintFav();
  },
  syncHearts(){
    $$('#productGrid [data-fav]').forEach(b => {
      const on = this.has(+b.dataset.fav);
      b.classList.toggle('on', on);
      b.innerHTML = `<i class="fa-${on?'solid':'regular'} fa-heart"></i>`;
    });
  },
  paint(){
    const box = $('#wishItems');
    const badge = $('#wishCount');
    badge.textContent = fa(this.items.length);
    badge.classList.toggle('show', this.items.length > 0);
    const mb = $('#mWishCount');
    if (mb){ mb.textContent = fa(this.items.length); mb.classList.toggle('show', this.items.length > 0); }
    if (!this.items.length){
      box.innerHTML = `<div class="cart-empty"><i class="fa-regular fa-heart"></i>
        <p class="mt-4 font-bold text-[var(--text)]">علاقه‌مندی خالی است</p>
        <p class="mt-1 text-sm">روی قلب محصولات بزن تا اینجا ذخیره بشن</p></div>`;
      return;
    }
    box.innerHTML = this.items.map(id => {
      const p = byId(id); if (!p) return '';
      return `<div class="cart-row">
        <img src="${img(p.seeds[0],200)}" alt="${p.title}" class="cursor-pointer" data-wqv="${p.id}">
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold truncate">${p.title}</h4>
          <p class="text-xs text-[var(--muted)] mt-0.5">${p.cat} • ${p.brand}</p>
          <div class="flex items-center justify-between mt-2.5">
            <span class="font-extrabold text-nova-500 text-sm">${money(p.price)}</span>
            <button class="btn-ghost !py-1.5 !px-3 !text-xs" data-wadd="${p.id}" ${p.stock===0?'disabled style="opacity:.4"':''}>
              <i class="fa-solid fa-cart-plus"></i> ${p.stock===0?'ناموجود':'سبد'}
            </button>
          </div>
        </div>
        <button class="del-btn self-start" data-wdel="${p.id}" aria-label="حذف"><i class="fa-solid fa-trash-can"></i></button>
      </div>`;
    }).join('');
    $$('[data-wqv]', box).forEach(b => b.onclick = () => { this.close(); QuickView.open(+b.dataset.wqv); });
    $$('[data-wadd]', box).forEach(b => b.onclick = () => Cart.add(+b.dataset.wadd));
    $$('[data-wdel]', box).forEach(b => b.onclick = () => this.toggle(+b.dataset.wdel));
  },
  open(){ this.paint(); $('#wishPanel').classList.add('open'); $('#wishBackdrop').classList.add('show'); lockScroll(true); },
  close(){ if(!$('#wishPanel').classList.contains('open'))return; $('#wishPanel').classList.remove('open'); $('#wishBackdrop').classList.remove('show'); lockScroll(false); }
};

/* ==========================================================
   16) COMPARE
   ========================================================== */
const Compare = {
  KEY: 'nova-cmp',
  items: [], MAX: 4,
  init(){
    this.items = store.get(this.KEY, []);
    $('#cmpOpenBtn').addEventListener('click', () => this.openModal());
    $('#cmpClear').addEventListener('click', () => { this.items = []; store.set(this.KEY, this.items); this.paint(); Shop.render(); Toast.show('لیست مقایسه خالی شد', 'info'); });
    $('#cmpClose').addEventListener('click', () => this.closeModal());
    $('#cmpBackdrop').addEventListener('click', () => this.closeModal());
    this.paint();
  },
  has(id){ return this.items.includes(id); },
  toggle(id){
    if (this.has(id)) this.items = this.items.filter(x => x !== id);
    else {
      if (this.items.length >= this.MAX) return Toast.show(`حداکثر ${fa(this.MAX)} کالا قابل مقایسه است`, 'err');
      this.items.push(id);
      Toast.show('به لیست مقایسه اضافه شد ⚖️', 'ok');
    }
    store.set(this.KEY, this.items);
    this.paint();
    $$('#productGrid [data-cmp]').forEach(b => b.classList.toggle('on', this.has(+b.dataset.cmp)));
  },
  paint(){
    const bar = $('#cmpFloat');
    bar.classList.toggle('show', this.items.length >= 2);
    $('#cmpTxt').textContent = `مقایسه (${fa(this.items.length)})`;
    $('#cmpThumbs').innerHTML = this.items.map(id => { const p = byId(id); return p ? `<img src="${img(p.seeds[0],100)}" alt="">` : ''; }).join('');
  },
  openModal(){
    if (this.items.length < 2) return Toast.show('حداقل ۲ کالا برای مقایسه لازم است', 'err');
    const list = this.items.map(byId).filter(Boolean);
    const rows = [
      ['تصویر', p => `<img src="${img(p.seeds[0],200)}" alt="">`],
      ['نام', p => `<b>${p.title}</b>`],
      ['قیمت', p => `<b class="text-nova-500">${money(p.price)}</b>${p.old?`<br><small class="line-through text-[var(--muted)]">${money(p.old)}</small>`:''}`],
      ['تخفیف', p => p.old ? `٪${fa(offPct(p))}` : '—'],
      ['امتیاز', p => `<span class="text-amber-400">${stars(p.rate)}</span>`],
      ['دسته', p => p.cat],
      ['برند', p => p.brand],
      ['موجودی', p => p.stock > 0 ? fa(p.stock) + ' عدد' : 'ناموجود'],
      ['فروش', p => fa(p.sold) + ' عدد'],
      ['', p => `<button class="btn-primary ripple !py-2 !px-4 !text-xs" data-cadd="${p.id}" ${p.stock===0?'disabled style="opacity:.4"':''}>افزودن به سبد</button>
                 <button class="btn-ghost !py-2 !px-3 !text-xs mt-1" data-cdel="${p.id}">حذف</button>`]
    ];
    $('#cmpTable').innerHTML =
      `<tr><th>ویژگی</th>${list.map(p => `<th>${p.brand}</th>`).join('')}</tr>` +
      rows.map(([k, fn]) => `<tr><th>${k}</th>${list.map(p => `<td>${fn(p)}</td>`).join('')}</tr>`).join('');
    $$('[data-cadd]').forEach(b => b.onclick = () => Cart.add(+b.dataset.cadd));
    $$('[data-cdel]').forEach(b => b.onclick = () => { this.toggle(+b.dataset.cdel); this.items.length >= 2 ? this.openModal() : this.closeModal(); });
    $('#cmpModal').classList.add('open'); $('#cmpBackdrop').classList.add('show'); lockScroll(true);
  },
  closeModal(){
    if (!$('#cmpModal').classList.contains('open')) return;
    $('#cmpModal').classList.remove('open'); $('#cmpBackdrop').classList.remove('show'); lockScroll(false);
  }
};

/* ==========================================================
   17) RECENTLY VIEWED (Disabled / Hidden per user request)
   ========================================================== */
const Recent = {
  KEY: 'nova-recent',
  init(){ this.paint(); },
  push(id){
    let arr = store.get(this.KEY, []).filter(x => x !== id);
    arr.unshift(id); arr = arr.slice(0, 6);
    store.set(this.KEY, arr); this.paint();
  },
  paint(){
    const wrap = $('#recentWrap');
    if (!wrap) return;
    const arr = store.get(this.KEY, []).map(byId).filter(Boolean);
    if (!arr.length){ wrap.classList.add('hidden'); return; }
    wrap.classList.remove('hidden');
    const row = $('#recentRow');
    if (row) row.innerHTML = arr.map(p => `<button class="recent-chip" data-rc="${p.id}"><img src="${img(p.seeds[0],100)}" alt="">${p.title.slice(0,22)}…</button>`).join('');
    $$('[data-rc]').forEach(b => b.onclick = () => QuickView.open(+b.dataset.rc));
  }
};
/* ==========================================================
   18) CART (LocalStorage + Coupon + Shipping progress)
   ========================================================== */
const Cart = {
  KEY: 'nova-cart', CPN: 'nova-coupon',
  items: [], coupon: null,

  init(){
    this.items = store.get(this.KEY, []);
    this.coupon = store.get(this.CPN, null);
    if (this.coupon && !COUPONS[this.coupon]) this.coupon = null;
    this.panel = $('#cartPanel'); this.bd = $('#cartBackdrop');

    $('#cartOpen').addEventListener('click', () => this.open());
    $('#cartClose').addEventListener('click', () => this.close());
    this.bd.addEventListener('click', () => this.close());

    $('#clearCart').addEventListener('click', () => {
      if (!this.items.length) return Toast.show('سبد خرید خالی است', 'err');
      this.items = []; this.coupon = null; store.set(this.CPN, null); this.save();
      Toast.show('سبد خرید خالی شد', 'info');
    });
    $('#checkoutBtn').addEventListener('click', () => {
      if (!this.items.length) return Toast.show('ابتدا محصولی اضافه کنید', 'err');
      this.close(); Checkout.open();
    });
    $('#couponBtn').addEventListener('click', () => this.applyCoupon());
    $('#couponInput').addEventListener('keydown', e => { if (e.key === 'Enter') this.applyCoupon(); });
    if (this.coupon) $('#couponInput').value = this.coupon;
    this.paint();
  },

  save(){ store.set(this.KEY, this.items); this.paint(); },

  add(id, qty = 1, silent = false){
    const p = byId(id); if (!p) return;
    if (p.stock === 0) return Toast.show('این کالا ناموجود است', 'err');
    const row = this.items.find(x => x.id === id);
    const cur = row ? row.qty : 0;
    if (cur + qty > p.stock) return Toast.show(`حداکثر ${fa(p.stock)} عدد موجود است`, 'err');
    row ? row.qty += qty : this.items.push({ id, qty });
    this.save();
    if (!silent){
      const badge = $('#cartCount');
      badge.classList.add('bump');
      setTimeout(() => badge.classList.remove('bump'), 480);
      Toast.show(`«${p.title}» به سبد اضافه شد 🛒`, 'ok');
    }
  },

  change(id, delta){
    const row = this.items.find(x => x.id === id); if (!row) return;
    const p = byId(id);
    row.qty += delta;
    if (row.qty <= 0) this.items = this.items.filter(x => x.id !== id);
    else if (p && row.qty > p.stock){ row.qty = p.stock; Toast.show(`حداکثر ${fa(p.stock)} عدد موجود است`, 'err'); }
    this.save();
  },
  remove(id){ this.items = this.items.filter(x => x.id !== id); this.save(); Toast.show('محصول از سبد حذف شد', 'info'); },

  subtotal(){
    return this.items.reduce((s,i) => { const p = byId(i.id); return s + (p ? p.price * i.qty : 0); }, 0);
  },
  discount(){
    if (!this.coupon || !COUPONS[this.coupon]) return 0;
    const c = COUPONS[this.coupon], sub = this.subtotal();
    if (sub < (c.min || 0)) return 0;
    if (c.freeShip) return 0;
    return Math.min(Math.round(sub * c.pct / 100), c.max);
  },
  shipEst(){
    if (!this.items.length) return 0;
    if (this.coupon === 'FREESHIP') return 0;
    return this.subtotal() - this.discount() >= FREE_SHIP_OVER ? 0 : SHIPPINGS[0].pr;
  },
  total(){ return this.subtotal() - this.discount() + this.shipEst(); },

  applyCoupon(){
    const code = $('#couponInput').value.trim().toUpperCase();
    if (!code) return Toast.show('کد تخفیف را وارد کن', 'err');
    const c = COUPONS[code];
    if (!c) return Toast.show('کد تخفیف معتبر نیست', 'err');
    if (this.subtotal() < (c.min || 0)) return Toast.show(`حداقل مبلغ خرید برای این کد ${money(c.min)} است`, 'err');
    this.coupon = code; store.set(this.CPN, code); this.save();
    Toast.show(`کد ${code} اعمال شد (${c.txt}) 🎉`, 'ok');
  },

  paint(){
    const box = $('#cartItems');
    const qty = this.items.reduce((s,i) => s + i.qty, 0);
    const sub = this.subtotal(), disc = this.discount(), ship = this.shipEst();

    const badge = $('#cartCount');
    badge.textContent = fa(qty);
    badge.classList.toggle('show', qty > 0);
    const mb = $('#mCartCount');
    if (mb){ mb.textContent = fa(qty); mb.classList.toggle('show', qty > 0); }

    const eff = sub - disc;
    const pct = Math.min(100, Math.round(eff / FREE_SHIP_OVER * 100));
    $('#shipBar').style.width = pct + '%';
    $('#shipTxt').innerHTML = eff >= FREE_SHIP_OVER
      ? '🎉 ارسال سفارش شما <b class="text-emerald-500">رایگان</b> شد!'
      : `تا ارسال رایگان <b>${money(FREE_SHIP_OVER - eff)}</b> مانده`;

    $('#cartQty').textContent = fa(qty);
    $('#cartSubtotal').textContent = money(sub);
    $('#discRow').classList.toggle('hidden', disc <= 0);
    if (disc > 0){ $('#discCode').textContent = `(${this.coupon})`; $('#discVal').textContent = '− ' + money(disc); }
    $('#shipCost').textContent = !this.items.length ? '—' : (ship === 0 ? 'رایگان 🎉' : money(ship));
    $('#cartTotal').textContent = money(this.total());

    if (!this.items.length){
      box.innerHTML = `<div class="cart-empty"><i class="fa-solid fa-basket-shopping"></i>
        <p class="mt-4 font-bold text-[var(--text)]">سبد خرید خالی است</p>
        <p class="mt-1 text-sm">چند محصول جذاب اضافه کن!</p></div>`;
      return;
    }
    box.innerHTML = this.items.map(i => {
      const p = byId(i.id); if (!p) return '';
      return `<div class="cart-row">
        <img src="${img(p.seeds[0], 200)}" alt="${p.title}">
        <div class="flex-1 min-w-0">
          <h4 class="text-sm font-bold truncate">${p.title}</h4>
          <p class="text-xs text-[var(--muted)] mt-0.5">${p.cat}</p>
          <div class="flex items-center justify-between mt-2.5">
            <div class="qty">
              <button data-dec="${p.id}" aria-label="کاهش"><i class="fa-solid fa-minus"></i></button>
              <span>${fa(i.qty)}</span>
              <button data-inc="${p.id}" aria-label="افزایش"><i class="fa-solid fa-plus"></i></button>
            </div>
            <span class="font-extrabold text-nova-500 text-sm">${money(p.price * i.qty)}</span>
          </div>
        </div>
        <button class="del-btn self-start" data-del="${p.id}" aria-label="حذف"><i class="fa-solid fa-trash-can"></i></button>
      </div>`;
    }).join('');

    $$('[data-inc]', box).forEach(b => b.onclick = () => this.change(+b.dataset.inc, +1));
    $$('[data-dec]', box).forEach(b => b.onclick = () => this.change(+b.dataset.dec, -1));
    $$('[data-del]', box).forEach(b => b.onclick = () => this.remove(+b.dataset.del));
  },

  open(){ this.panel.classList.add('open'); this.bd.classList.add('show'); lockScroll(true); },
  close(){ if(!this.panel.classList.contains('open'))return; this.panel.classList.remove('open'); this.bd.classList.remove('show'); lockScroll(false); }
};

/* ==========================================================
   19) AUTH (mock, LocalStorage)
   ========================================================== */
const Auth = {
  UK: 'nova-users', SK: 'nova-session',
  init(){
    $('#userOpen').addEventListener('click', () => this.open());
    $('#authClose').addEventListener('click', () => this.close());
    $('#authBackdrop').addEventListener('click', () => this.close());
    this.paintBtn();
  },
  users(){ return store.get(this.UK, []); },
  current(){
    const em = store.get(this.SK, null);
    return em ? this.users().find(u => u.email === em) || null : null;
  },
  paintBtn(){
    const u = this.current();
    const t = $('#accountTxt');
    if (t) t.textContent = u ? u.name.split(' ')[0] : 'ورود / ثبت‌نام';
    $('#userOpen').classList.toggle('!border-[var(--primary)]', !!u);
  },
  open(){
    const u = this.current();
    $('#authBox').innerHTML = u ? this.profileHtml(u) : this.formsHtml();
    this.bind();
    $('#authModal').classList.add('open'); $('#authBackdrop').classList.add('show'); lockScroll(true);
  },
  close(){
    if (!$('#authModal').classList.contains('open')) return;
    $('#authModal').classList.remove('open'); $('#authBackdrop').classList.remove('show'); lockScroll(false);
  },
  formsHtml(){
    return `
      <div class="text-center mb-3">
        <span class="logo-mark !w-16 !h-16 mx-auto mb-2.5">
          <img src="images/nova-icon.svg" alt="NOVA">
        </span>
        <h3 class="text-xl font-black mt-2">خوش اومدی به نوا 👋</h3>
        <p class="text-sm text-[var(--muted)] mt-1">وارد حساب کاربری شو یا حساب جدید بساز</p>
      </div>
      <div class="auth-tab mt-5"><button data-at="login" class="on">ورود</button><button data-at="register">ثبت‌نام</button></div>
      <div data-apane="login">
        <label class="lbl">ایمیل</label><input id="liEmail" class="input" dir="ltr" placeholder="you@mail.com"><small class="err" id="liEmailE"></small>
        <label class="lbl mt-3">رمز عبور</label><input id="liPass" type="password" class="input" dir="ltr" placeholder="••••••"><small class="err" id="liPassE"></small>
        <button id="loginBtn" class="btn-primary ripple w-full mt-4 justify-center"><i class="fa-solid fa-right-to-bracket"></i> ورود به حساب</button>
      </div>
      <div data-apane="register" class="hidden">
        <label class="lbl">نام و نام خانوادگی</label><input id="rgName" class="input" placeholder="مثلاً: سارا محمدی"><small class="err" id="rgNameE"></small>
        <label class="lbl mt-3">ایمیل</label><input id="rgEmail" class="input" dir="ltr" placeholder="you@mail.com"><small class="err" id="rgEmailE"></small>
        <label class="lbl mt-3">رمز عبور (حداقل ۶ کاراکتر)</label><input id="rgPass" type="password" class="input" dir="ltr" placeholder="••••••"><small class="err" id="rgPassE"></small>
        <button id="registerBtn" class="btn-primary ripple w-full mt-4 justify-center"><i class="fa-solid fa-user-plus"></i> ساخت حساب کاربری</button>
      </div>`;
  },
  profileHtml(u){
    const orders = Orders.mine();
    return `
      <div class="text-center">
        <span class="logo-mark !w-16 !h-16 !text-2xl mx-auto">${esc(u.name.trim()[0] || 'ک')}</span>
        <h3 class="text-xl font-black mt-3">${esc(u.name)}</h3>
        <p class="text-sm text-[var(--muted)]" dir="ltr">${esc(u.email)}</p>
      </div>
      <div class="grid grid-cols-3 gap-2 mt-5 text-center">
        <div class="p-3 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]"><b class="block text-lg">${fa(orders.length)}</b><span class="text-[11px] text-[var(--muted)]">سفارش</span></div>
        <div class="p-3 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]"><b class="block text-lg">${fa(Wish.items.length)}</b><span class="text-[11px] text-[var(--muted)]">علاقه‌مندی</span></div>
        <div class="p-3 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]"><b class="block text-lg">${fa(Cart.items.reduce((s,i)=>s+i.qty,0))}</b><span class="text-[11px] text-[var(--muted)]">سبد</span></div>
      </div>
      <h4 class="font-extrabold mt-5 mb-2">سفارش‌های من</h4>
      <div class="max-h-52 overflow-y-auto">${Orders.listHtml(orders)}</div>
      <button id="logoutBtn" class="btn-ghost w-full mt-4 justify-center !text-rose-500"><i class="fa-solid fa-right-from-bracket"></i> خروج از حساب</button>`;
  },
  bind(){
    const box = $('#authBox');
    $$('[data-at]', box).forEach(t => t.addEventListener('click', () => {
      $$('[data-at]', box).forEach(x => x.classList.remove('on')); t.classList.add('on');
      $$('[data-apane]', box).forEach(p => p.classList.toggle('hidden', p.dataset.apane !== t.dataset.at));
    }));
    const login = $('#loginBtn', box);
    if (login) login.addEventListener('click', () => {
      const em = $('#liEmail').value.trim().toLowerCase(), ps = $('#liPass').value;
      let ok = true;
      $('#liEmailE').textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) ? '' : 'ایمیل معتبر وارد کن';
      if ($('#liEmailE').textContent) ok = false;
      $('#liPassE').textContent = ps.length >= 6 ? '' : 'رمز حداقل ۶ کاراکتر';
      if ($('#liPassE').textContent) ok = false;
      if (!ok) return;
      const u = this.users().find(x => x.email === em && x.pass === ps);
      if (!u) return Toast.show('ایمیل یا رمز اشتباه است', 'err');
      store.set(this.SK, em); this.paintBtn(); this.open();
      Toast.show(`خوش برگشتی ${u.name.split(' ')[0]}! 👋`, 'ok');
    });
    const reg = $('#registerBtn', box);
    if (reg) reg.addEventListener('click', () => {
      const nm = $('#rgName').value.trim(), em = $('#rgEmail').value.trim().toLowerCase(), ps = $('#rgPass').value;
      let ok = true;
      $('#rgNameE').textContent = nm.length >= 3 ? '' : 'نام حداقل ۳ حرف';
      if ($('#rgNameE').textContent) ok = false;
      $('#rgEmailE').textContent = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) ? '' : 'ایمیل معتبر وارد کن';
      if ($('#rgEmailE').textContent) ok = false;
      $('#rgPassE').textContent = ps.length >= 6 ? '' : 'رمز حداقل ۶ کاراکتر';
      if ($('#rgPassE').textContent) ok = false;
      if (!ok) return;
      const users = this.users();
      if (users.find(x => x.email === em)) return Toast.show('این ایمیل قبلاً ثبت شده؛ وارد شو', 'err');
      users.push({ name: nm, email: em, pass: ps });
      store.set(this.UK, users); store.set(this.SK, em);
      this.paintBtn(); this.open();
      Toast.show('حسابت ساخته شد! کد WELCOME10 هدیه تو 🎁', 'ok');
    });
    const lo = $('#logoutBtn', box);
    if (lo) lo.addEventListener('click', () => {
      store.set(this.SK, null); this.paintBtn(); this.open();
      Toast.show('از حسابت خارج شدی', 'info');
    });
  }
};

/* ==========================================================
   20) ORDERS
   ========================================================== */
const Orders = {
  KEY: 'nova-orders',
  all(){ return store.get(this.KEY, []); },
  mine(){ const u = Auth.current(); return this.all().filter(o => !u || o.email === u.email || o.email === 'guest'); },
  statusFa(s){ return {pending:['در انتظار پرداخت','status--pending'],paid:['پرداخت شده','status--pending'],shipped:['ارسال شده','status--shipped'],done:['تحویل شده','status--done']}[s] || ['ثبت شده','status--pending']; },
  listHtml(orders){
    if (!orders.length) return `<p class="text-sm text-[var(--muted)] text-center py-4">هنوز سفارشی ثبت نکردی 🛍️</p>`;
    return orders.map(o => {
      const [txt, cls] = this.statusFa(o.status);
      return `<div class="order-row">
        <div class="order-top"><b dir="ltr">${o.code}</b><span class="status-pill ${cls}">${txt}</span></div>
        <p class="text-xs text-[var(--muted)] mt-2">${fa(o.items.reduce((s,i)=>s+i.qty,0))} قلم کالا • ${money(o.total)} • ${o.date}</p>
      </div>`;
    }).join('');
  }
};
/* ==========================================================
   21) CHECKOUT (3 steps + success)
   ========================================================== */
const Checkout = {
  step: 1, ship: 'pishtaz', pay: 'online', info: {},
  init(){
    $('#coClose').addEventListener('click', () => this.close());
    $('#coBackdrop').addEventListener('click', () => this.close());
  },
  open(){
    if (!Cart.items.length) return Toast.show('سبد خرید خالی است', 'err');
    this.step = 1;
    const u = Auth.current();
    this.info = { name: u ? u.name : '', phone: '', city: 'تهران', address: '', postal: '' };
    this.render();
    $('#coModal').classList.add('open'); $('#coBackdrop').classList.add('show'); lockScroll(true);
  },
  close(){
    if (!$('#coModal').classList.contains('open')) return;
    $('#coModal').classList.remove('open'); $('#coBackdrop').classList.remove('show'); lockScroll(false);
  },
  stepsHtml(){
    const s = this.step;
    const item = (n, icon, label) => `<div class="step ${s===n?'on':''} ${s>n?'done':''}"><i class="fa-solid ${s>n?'fa-check':icon}"></i><span>${label}</span></div>`;
    return `<div class="steps">${item(1,'fa-location-dot','اطلاعات ارسال')}${item(2,'fa-credit-card','ارسال و پرداخت')}${item(3,'fa-clipboard-check','بازبینی و ثبت')}</div>`;
  },
  summaryHtml(){
    const sub = Cart.subtotal(), disc = Cart.discount();
    const shipFree = (sub - disc) >= FREE_SHIP_OVER || Cart.coupon === 'FREESHIP';
    const shipObj = SHIPPINGS.find(s => s.id === this.ship);
    const shipCost = shipFree ? 0 : shipObj.pr;
    const total = sub - disc + shipCost;
    this._sum = { sub, disc, shipCost, total, shipFree, shipName: shipObj.n };
    return `
      <div class="p-5 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]">
        <h4 class="font-extrabold mb-3"><i class="fa-solid fa-receipt text-nova-500"></i> خلاصه سفارش</h4>
        <div class="max-h-44 overflow-y-auto space-y-2 mb-3">
          ${Cart.items.map(i => { const p = byId(i.id); return p ? `
            <div class="flex items-center gap-2 text-[13px]">
              <img src="${img(p.seeds[0],100)}" class="w-10 h-10 rounded-xl object-cover" alt="">
              <span class="flex-1 truncate font-bold">${p.title} <small class="text-[var(--muted)]">× ${fa(i.qty)}</small></span>
              <b class="whitespace-nowrap">${money(p.price*i.qty)}</b>
            </div>` : ''; }).join('')}
        </div>
        <div class="totals-row"><span>جمع کالاها</span><span>${money(sub)}</span></div>
        ${disc ? `<div class="totals-row disc"><span>تخفیف (${Cart.coupon})</span><span>− ${money(disc)}</span></div>` : ''}
        <div class="totals-row"><span>ارسال (${shipObj.n.split(' (')[0]})</span><span>${shipCost===0?'رایگان 🎉':money(shipCost)}</span></div>
        <div class="totals-row grand"><span>قابل پرداخت</span><span class="text-nova-500">${money(total)}</span></div>
      </div>`;
  },
  render(){
    const box = $('#coBox');
    if (this.step === 1){
      box.innerHTML = `${this.stepsHtml()}
        <div class="grid md:grid-cols-5 gap-6">
          <div class="md:col-span-3">
            <h3 class="font-black text-lg mb-4">آدرس تحویل گیرنده 📍</h3>
            <div class="grid sm:grid-cols-2 gap-4">
              <div><label class="lbl">نام و نام خانوادگی *</label><input id="coName" class="input" value="${esc(this.info.name)}" placeholder="سارا محمدی"><small class="err" id="coNameE"></small></div>
              <div><label class="lbl">شماره موبایل *</label><input id="coPhone" class="input" dir="ltr" value="${esc(this.info.phone)}" placeholder="09123456789" maxlength="11"><small class="err" id="coPhoneE"></small></div>
            </div>
            <div class="grid sm:grid-cols-2 gap-4 mt-4">
              <div><label class="lbl">شهر</label><select id="coCity" class="input">${['تهران','کرج','مشهد','اصفهان','شیراز','تبریز','اهواز','قم','رشت','کرمان','یزد','سایر'].map(c=>`<option ${c===this.info.city?'selected':''}>${c}</option>`).join('')}</select></div>
              <div><label class="lbl">کد پستی (اختیاری)</label><input id="coPostal" class="input" dir="ltr" value="${esc(this.info.postal)}" placeholder="1234567890" maxlength="10"></div>
            </div>
            <div class="mt-4"><label class="lbl">آدرس کامل *</label><textarea id="coAddr" rows="3" class="input resize-none" placeholder="استان، شهر، خیابان، کوچه، پلاک، واحد…">${esc(this.info.address)}</textarea><small class="err" id="coAddrE"></small></div>
          </div>
          <div class="md:col-span-2">${this.summaryHtml()}
            <button id="coNext1" class="btn-primary ripple w-full mt-4 justify-center">ادامه <i class="fa-solid fa-arrow-left"></i></button>
          </div>
        </div>`;
      $('#coNext1').addEventListener('click', () => {
        const name = $('#coName').value.trim(), phone = $('#coPhone').value.trim(), addr = $('#coAddr').value.trim();
        let ok = true;
        $('#coNameE').textContent = name.length >= 3 ? '' : 'نام کامل را وارد کن';
        if ($('#coNameE').textContent) ok = false;
        $('#coPhoneE').textContent = /^09\d{9}$/.test(phone) ? '' : 'شماره موبایل معتبر نیست';
        if ($('#coPhoneE').textContent) ok = false;
        $('#coAddrE').textContent = addr.length >= 10 ? '' : 'آدرس کامل‌تر بنویس (حداقل ۱۰ حرف)';
        if ($('#coAddrE').textContent) ok = false;
        if (!ok) return;
        this.info = { name, phone, city: $('#coCity').value, address: addr, postal: $('#coPostal').value.trim() };
        this.step = 2; this.render();
      });
    }
    if (this.step === 2){
      box.innerHTML = `${this.stepsHtml()}
        <div class="grid md:grid-cols-5 gap-6">
          <div class="md:col-span-3">
            <h3 class="font-black text-lg mb-3">روش ارسال 🚚</h3>
            ${SHIPPINGS.map(s => `
              <div class="pay-card ${this.ship===s.id?'on':''}" data-ship="${s.id}">
                <span class="pi"><i class="fa-solid ${s.icon}"></i></span>
                <span class="flex-1"><b class="block">${s.n}</b>
                <small class="text-[var(--muted)]">${(Cart.subtotal()-Cart.discount()) >= FREE_SHIP_OVER || Cart.coupon==='FREESHIP' ? 'رایگان برای این سفارش 🎉' : money(s.pr)}</small></span>
                <i class="fa-solid ${this.ship===s.id?'fa-circle-check text-nova-500':'fa-circle text-[var(--border)]'} text-xl"></i>
              </div>`).join('')}
            <h3 class="font-black text-lg mt-5 mb-3">روش پرداخت 💳</h3>
            ${PAYMENTS.map(p => `
              <div class="pay-card ${this.pay===p.id?'on':''}" data-pay="${p.id}">
                <span class="pi"><i class="fa-solid ${p.icon}"></i></span>
                <span class="flex-1"><b class="block">${p.n}</b><small class="text-[var(--muted)]">${p.d}</small></span>
                <i class="fa-solid ${this.pay===p.id?'fa-circle-check text-nova-500':'fa-circle text-[var(--border)]'} text-xl"></i>
              </div>`).join('')}
          </div>
          <div class="md:col-span-2">${this.summaryHtml()}
            <div class="flex gap-2 mt-4">
              <button id="coBack2" class="btn-ghost flex-1 justify-center">قبلی</button>
              <button id="coNext2" class="btn-primary ripple flex-[2] justify-center">بازبینی سفارش <i class="fa-solid fa-arrow-left"></i></button>
            </div>
          </div>
        </div>`;
      $$('[data-ship]', box).forEach(el => el.addEventListener('click', () => { this.ship = el.dataset.ship; this.render(); }));
      $$('[data-pay]', box).forEach(el => el.addEventListener('click', () => { this.pay = el.dataset.pay; this.render(); }));
      $('#coBack2').addEventListener('click', () => { this.step = 1; this.render(); });
      $('#coNext2').addEventListener('click', () => { this.step = 3; this.render(); });
    }
    if (this.step === 3){
      const payName = PAYMENTS.find(p=>p.id===this.pay).n;
      box.innerHTML = `${this.stepsHtml()}
        <div class="grid md:grid-cols-5 gap-6">
          <div class="md:col-span-3 space-y-3">
            <h3 class="font-black text-lg">بازبینی نهایی 👀</h3>
            <div class="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)] text-sm leading-8">
              <b><i class="fa-solid fa-user text-nova-500"></i> ${esc(this.info.name)}</b> • <span dir="ltr">${esc(this.info.phone)}</span><br>
              <i class="fa-solid fa-location-dot text-nova-500"></i> ${esc(this.info.city)} — ${esc(this.info.address)}
            </div>
            <div class="grid sm:grid-cols-2 gap-3 text-sm">
              <div class="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]"><span class="text-[var(--muted)]">روش ارسال</span><b class="block mt-1">${this._sum.shipName}</b></div>
              <div class="p-4 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]"><span class="text-[var(--muted)]">روش پرداخت</span><b class="block mt-1">${payName}</b></div>
            </div>
            <label class="flex items-start gap-2 text-[13px] text-[var(--muted)] cursor-pointer leading-7">
              <input type="checkbox" id="coAgree" class="mt-2"> <span><a href="#" onclick="return false" class="text-nova-500 font-bold">قوانین و مقررات</a> نوا را خوانده و می‌پذیرم.</span>
            </label>
          </div>
          <div class="md:col-span-2">${this.summaryHtml()}
            <div class="flex gap-2 mt-4">
              <button id="coBack3" class="btn-ghost flex-1 justify-center">قبلی</button>
              <button id="coSubmit" class="btn-primary ripple flex-[2] justify-center"><i class="fa-solid fa-lock"></i> پرداخت و ثبت سفارش</button>
            </div>
          </div>
        </div>`;
      $('#coBack3').addEventListener('click', () => { this.step = 2; this.render(); });
      $('#coSubmit').addEventListener('click', () => {
        if (!$('#coAgree').checked) return Toast.show('اول قوانین را بپذیر', 'err');
        this.submit();
      });
    }
  },
  submit(){
    const btn = $('#coSubmit');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> در حال اتصال به درگاه…';
    btn.disabled = true;
    setTimeout(() => {
      const code = 'NV-' + Math.floor(100000 + Math.random()*900000);
      const u = Auth.current();
      const orders = Orders.all();
      const payName = PAYMENTS.find(p=>p.id===this.pay).n;
      const order = {
        code, date: '۱۹ شهریور ۱۴۰۵',
        items: Cart.items.map(i => ({...i})), total: this._sum.total,
        name: this.info.name, phone: this.info.phone, city: this.info.city, address: this.info.address,
        ship: this._sum.shipName, pay: payName, email: u ? u.email : 'guest',
        status: this.pay === 'online' ? 'paid' : 'pending'
      };
      orders.unshift(order);
      store.set(Orders.KEY, orders);
      Cart.items.forEach(i => { const p = byId(i.id); if (p) p.stock = Math.max(0, p.stock - i.qty); });
      Cart.items = []; Cart.coupon = null; store.set(Cart.CPN, null); Cart.save();
      Shop.render();
      $('#coBox').innerHTML = `
        <div class="text-center max-w-md mx-auto py-4">
          <div class="success-check"><i class="fa-solid fa-check"></i></div>
          <h3 class="text-2xl font-black">سفارشت ثبت شد! 🎉</h3>
          <p class="text-sm text-[var(--muted)] mt-2 leading-8">ممنون ${esc(order.name.split(' ')[0])} از اعتمادت. جزئیات سفارش پیامک شد و به‌زودی ارسال می‌کنیم.</p>
          <p class="lbl mt-5">کد پیگیری سفارش (کلیک کن تا کپی شه):</p>
          <div class="track-code" id="okCode">${code}</div>
          <div class="grid grid-cols-2 gap-3 mt-4 text-sm">
            <div class="p-3 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]"><span class="text-[var(--muted)] text-xs">مبلغ پرداخت</span><b class="block mt-1 text-nova-500">${money(order.total)}</b></div>
            <div class="p-3 rounded-2xl bg-[var(--surface-2)] border border-[var(--border)]"><span class="text-[var(--muted)] text-xs">روش پرداخت</span><b class="block mt-1">${payName}</b></div>
          </div>
          <div class="flex gap-2 mt-5">
            <button id="okTrack" class="btn-ghost flex-1 justify-center">پیگیری سفارش</button>
            <button id="okShop" class="btn-primary ripple flex-1 justify-center">ادامه خرید</button>
          </div>
        </div>`;
      $('#okCode').addEventListener('click', () => { if(navigator.clipboard) navigator.clipboard.writeText(code); Toast.show('کد پیگیری کپی شد', 'ok'); });
      $('#okTrack').addEventListener('click', () => { this.close(); Track.open(code); });
      $('#okShop').addEventListener('click', () => { this.close(); $('#products').scrollIntoView({behavior:'smooth'}); });
      Auth.paintBtn();
    }, 1400);
  }
};

/* ==========================================================
   22) TRACK ORDER
   ========================================================== */
const Track = {
  init(){
    $('#trackClose').addEventListener('click', () => this.close());
    $('#trackBackdrop').addEventListener('click', () => this.close());
    $('#trackOrderLink').addEventListener('click', e => { e.preventDefault(); this.open(); });
    $('#fTrack').addEventListener('click', e => { e.preventDefault(); this.open(); });
    $('#trackBtn').addEventListener('click', () => this.find());
    $('#trackInput').addEventListener('keydown', e => { if (e.key === 'Enter') this.find(); });
  },
  open(prefill=''){
    $('#trackInput').value = prefill; $('#trackResult').innerHTML = '';
    $('#trackModal').classList.add('open'); $('#trackBackdrop').classList.add('show'); lockScroll(true);
    if (prefill) this.find();
    setTimeout(() => $('#trackInput').focus(), 100);
  },
  close(){
    if (!$('#trackModal').classList.contains('open')) return;
    $('#trackModal').classList.remove('open'); $('#trackBackdrop').classList.remove('show'); lockScroll(false);
  },
  find(){
    const code = $('#trackInput').value.trim().toUpperCase();
    const box = $('#trackResult');
    if (!code) { box.innerHTML = ''; return Toast.show('کد پیگیری را وارد کن', 'err'); }
    const o = Orders.all().find(x => x.code.toUpperCase() === code);
    if (!o){ box.innerHTML = `<div class="p-4 rounded-2xl text-center text-sm bg-[rgba(244,63,94,.1)] text-rose-500 font-bold">سفارشی با این کد پیدا نشد ❌</div>`; return; }
    const [txt, cls] = Orders.statusFa(o.status);
    box.innerHTML = `<div class="order-row !mb-0">
      <div class="order-top"><b dir="ltr">${o.code}</b><span class="status-pill ${cls}">${txt}</span></div>
      <div class="mt-3 text-[13px] leading-8">
        <p><i class="fa-solid fa-user text-nova-500"></i> ${esc(o.name)} • <span dir="ltr">${esc(o.phone)}</span></p>
        <p><i class="fa-solid fa-box text-nova-500"></i> ${fa(o.items.reduce((s,i)=>s+i.qty,0))} قلم کالا — <b class="text-nova-500">${money(o.total)}</b></p>
        <p><i class="fa-solid fa-truck-fast text-nova-500"></i> ${esc(o.ship)} • ${esc(o.pay)}</p>
        <p><i class="fa-solid fa-calendar text-nova-500"></i> ثبت: ${o.date}</p>
      </div></div>`;
  }
};
/* ==========================================================
   23) CONTENT : BLOG / TESTIMONIALS / FAQ
   ========================================================== */
const Content = {
  ti: 0,
  init(){
    $('#blogGrid').innerHTML = BLOGS.map((b, bi) => `
      <article class="blog-card">
        <img src="${img(b.seed,600)}" alt="${b.t}" loading="lazy" data-blog data-bi="${bi}">
        <div class="pad">
          <span class="chip !text-[11px] !py-1"><i class="fa-solid fa-book-open"></i> راهنمای خرید</span>
          <h3>${b.t}</h3><p>${b.d}</p>
          <div class="blog-meta"><span><i class="fa-regular fa-calendar"></i> ${b.date}</span><span><i class="fa-regular fa-clock"></i> ${b.read}</span></div>
          <button class="sec-link mt-4 w-max" data-blog data-bi="${bi}">خواندن مقاله <i class="fa-solid fa-arrow-left"></i></button>
        </div>
      </article>`).join('');
    $$('#blogGrid [data-blog]').forEach(el => el.addEventListener('click', () => Blog.open(+el.dataset.bi)));

    $('#testiBox').innerHTML = TESTIS.map((t,i) => `
      <div class="testi ${i===0?'active':''}">
        <div class="testi-card">
          <img src="${img(t.seed,200)}" alt="${t.n}">
          <div class="text-amber-400 mt-3">${stars(t.s)}</div>
          <p class="mt-4 text-[15px] leading-9">«${t.t}»</p>
          <b class="block mt-4">${t.n}</b><small class="text-[var(--muted)]">${t.r}</small>
        </div>
      </div>`).join('');
    $('#testiDots').innerHTML = TESTIS.map((_,i)=>`<button data-td="${i}" class="${i===0?'on':''}" aria-label="نظر ${i+1}"></button>`).join('');
    $$('#testiDots button').forEach(b => b.addEventListener('click', () => this.tGo(+b.dataset.td)));
    $('#testiPrev').addEventListener('click', () => this.tGo(this.ti - 1));
    $('#testiNext').addEventListener('click', () => this.tGo(this.ti + 1));
    setInterval(() => this.tGo(this.ti + 1), 8000);

    $('#faqList').innerHTML = FAQS.map(f => `
      <div class="faq-item">
        <button class="faq-q">${f.q}<i class="fa-solid fa-chevron-down"></i></button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>`).join('');
    $$('.faq-item').forEach(item => {
      const q = $('.faq-q', item), a = $('.faq-a', item);
      q.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        $$('.faq-item.open').forEach(o => { o.classList.remove('open'); $('.faq-a', o).style.maxHeight = null; });
        if (!isOpen){ item.classList.add('open'); a.style.maxHeight = a.scrollHeight + 'px'; }
      });
    });
  },
  tGo(i){
    this.ti = (i + TESTIS.length) % TESTIS.length;
    $$('#testiBox .testi').forEach((t,k) => t.classList.toggle('active', k === this.ti));
    $$('#testiDots button').forEach((d,k) => d.classList.toggle('on', k === this.ti));
  }
};

/* ==========================================================
   24) NEWSLETTER
   ========================================================== */
const News = {
  init(){
    const join = email => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Toast.show('ایمیل معتبر وارد کن', 'err');
      const list = store.get('nova-news', []);
      if (list.includes(email)) return Toast.show('قبلاً عضو شدی، ممنون! 💌', 'info');
      list.push(email); store.set('nova-news', list);
      Toast.show('عضویتت ثبت شد! کد WELCOME10 هدیه تو 🎁', 'ok');
    };
    $('#newsForm').addEventListener('submit', e => { e.preventDefault(); join($('#newsInput').value.trim()); $('#newsInput').value = ''; });
    $('#footNewsBtn').addEventListener('click', () => { join($('#footNews').value.trim()); $('#footNews').value = ''; });
  }
};

/* ==========================================================
   25) CONTACT FORM
   ========================================================== */
const Forms = {
  init(){
    const f = $('#contactForm'); if (!f) return;
    f.addEventListener('submit', e => {
      e.preventDefault();
      const name = $('#cName'), mail = $('#cEmail'), phone = $('#cPhone'), msg = $('#cMsg');
      let ok = true;
      const set = (el, err) => {
        const small = el.parentElement.querySelector('.err');
        el.classList.toggle('invalid', !!err);
        if (small) small.textContent = err || '';
        if (err) ok = false;
      };
      set(name, name.value.trim().length < 3 ? 'نام باید حداقل ۳ حرف باشد' : '');
      set(mail, /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail.value.trim()) ? '' : 'ایمیل معتبر وارد کنید');
      set(phone, phone.value.trim() && !/^09\d{9}$/.test(phone.value.trim()) ? 'شماره موبایل معتبر نیست' : '');
      set(msg, msg.value.trim().length < 10 ? 'پیام باید حداقل ۱۰ حرف باشد' : '');
      if (ok){
        const box = store.get('nova-msgs', []);
        box.unshift({ name: name.value.trim(), mail: mail.value.trim(), msg: msg.value.trim(), date: Date.now() });
        store.set('nova-msgs', box);
        Toast.show('پیام شما با موفقیت ارسال شد ✅', 'ok'); f.reset();
      } else Toast.show('لطفاً خطاهای فرم را بررسی کنید', 'err');
    });
  }
};

/* ==========================================================
   26) UI : Reveal / Counter / Preloader / Keys
   ========================================================== */
const UI = {
  init(){
    this.reveal();
    this.counters();
    this.keys();
    window.addEventListener('load', () => setTimeout(() => $('#preloader').classList.add('hide'), 500));
    setTimeout(() => $('#preloader').classList.add('hide'), 3500);
  },
  reveal(){
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { threshold:.12 });
    $$('.reveal').forEach(el => io.observe(el));
  },
  counters(){
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (!en.isIntersecting) return;
        const el = en.target, target = +el.dataset.target;
        let cur = 0; const step = target / 60;
        const tick = () => {
          cur += step;
          if (cur >= target){ el.textContent = fa(target.toLocaleString('en-US')); return; }
          el.textContent = fa(Math.floor(cur).toLocaleString('en-US'));
          requestAnimationFrame(tick);
        };
        tick(); io.unobserve(el);
      });
    }, { threshold:.5 });
    $$('.counter').forEach(el => io.observe(el));
  },
  keys(){
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape'){
        QuickView.close(); Compare.closeModal(); Auth.close(); Checkout.close(); Track.close();
        Search.close(); Cart.close(); Wish.close(); Nav.closeMenu?.();
        MegaMenu.close(); if (FilterDrawer.close) FilterDrawer.close();
        Blog.close();
      }
      if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)){
        e.preventDefault();
        const inp = window.innerWidth >= 768 ? $('#searchInput') : $('#searchInputM');
        if (inp){ inp.focus(); inp.scrollIntoView({ behavior:'smooth', block:'center' }); }
      }
      if ($('#quickModal').classList.contains('open')){
        if (e.key === 'ArrowLeft')  QuickView.go(QuickView.idx + 1);
        if (e.key === 'ArrowRight') QuickView.go(QuickView.idx - 1);
      }
    });
  }
};

/* ==========================================================
   BOOTSTRAP
   ========================================================== */
document.addEventListener('DOMContentLoaded', () => {
  Theme.init();
  Nav.init();
  Hero.init();
  Typewriter.init();
  Ripple.init();
  Search.init();
  Amazing.init();
  Cats.init();
  Shop.init();
  MegaMenu.init();
  HomeTabs.init();
  BrandStrip.init();
  FilterDrawer.init();
  BottomNav.init();
  Carousel.initAll();
  Tilt.bind();
  QuickView.init();
  Wish.init();
  Compare.init();
  Recent.init();
  Cart.init();
  Auth.init();
  Checkout.init();
  Track.init();
  Content.init();
  Blog.init();
  News.init();
  Forms.init();
  UI.init();
  const m = location.hash.match(/^#p-(\d+)$/);
  if (m) setTimeout(() => QuickView.open(+m[1]), 900);
  const mb = location.hash.match(/^#b-(\d+)$/);
  if (mb) setTimeout(() => Blog.open(+mb[1]), 900);
  console.log('%c NOVA Shop ⚡ full-store ready ', 'background:#3363ff;color:#fff;padding:4px 10px;border-radius:6px');
});
