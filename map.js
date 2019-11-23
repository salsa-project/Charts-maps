//D3 (v3, v5) working together in the same page
d3version3 = d3
window.d3 = null


var map = new Datamap({
    element: document.getElementById('container'),
    scope: 'world',
    fills: {
      defaultFill: 'rgba(220, 225, 232, 0.8)'
    },
    geographyConfig: {
        popupOnHover: true,
        highlightOnHover: true,
        borderColor: 'rgba(220, 225, 232, 0.4)',
        borderWidth: 1
    },
    bubblesConfig: {
        borderWidth: 2,
        borderOpacity: 1,
        borderColor: '#FFFFFF',
        popupOnHover: true,
        radius: 3
    }
    });

map.bubbles([
  //هنا تضع عناوين البلدان (خطوط الطول و العرض) لتظهر العلامات الزرقاء على الخريطة
 {name: 'Bubble 1', latitude: 21.32, longitude: -7.32},
 {name: 'Bubble 2', latitude: -11.32, longitude: -60.32},
 {name: 'Bubble 3', latitude: 21.32, longitude: -7.32},
 {name: 'Bubble 4', latitude: 5.32, longitude: 38.32}
], {
 popupTemplate: function(geo, data) {
   return "<div class='hoverinfo'>Bubble for " + data.name + "";
 }
});

//تغيير إسم الدولة من إسرائيل إلى فلسطين
for(var i = 0; i < Datamap.prototype.worldTopo.objects.world.geometries.length; ++i){
 if(Datamap.prototype.worldTopo.objects.world.geometries[i].properties.name == "Israel"){
   Datamap.prototype.worldTopo.objects.world.geometries[i].properties.name = "Palestine"
   Datamap.prototype.worldTopo.objects.world.geometries[i].id = "PSE"
 }
}

//هنا أنا قمت بتعريب الدول في حالة إحتجتها معربة
//في حالة أنك لا تريد الدول بالعربية فقط قم بحذف جميع الأسطر التي أسفل هذا التعليق
//بعد حذفها ستعود أسماء الدول باللغة الإنجليزية
let countriesAr = [
{name: 'null', id: 'TWN'},
{name: 'أفغانستان', id: 'AFG'},
{name: 'ألبانيا', id: 'ALB'},
{name: 'الجزائر', id: 'DZA'},
{name: 'ساموا الأمريكية', id: 'ASM'},
{name: 'أندورا', id: 'AND'},
{name: 'أنغولا', id: 'AGO'},
{name: 'أنغيلا', id: 'AIA'},
{name: 'أنتاركتيكا', id: 'ATA'},
{name: 'أنتيغوا وبربودا', id: 'ATG'},
{name: 'الأرجنتين', id: 'ARG'},
{name: 'أرمينيا', id: 'ARM'},
{name: 'أروبا', id: 'ABW'},
{name: 'أستراليا', id: 'AUS'},
{name: 'النمسا', id: 'AUT'},
{name: 'أذربيجان', id: 'AZE'},
{name: 'جزر البهاما', id: 'BHS'},
{name: 'البحرين', id: 'BHR'},
{name: 'بنغلاديش', id: 'BGD'},
{name: 'بربادوس', id: 'BRB'},
{name: 'بيلاروس', id: 'BLR'},
{name: 'بلجيكا', id: 'BEL'},
{name: 'بليز', id: 'BLZ'},
{name: 'بنن', id: 'BEN'},
{name: 'برمودا', id: 'BMU'},
{name: 'بوتان', id: 'BTN'},
{name: 'بوليفيا (دولة - المتعددة القوميات)', id: 'BOL'},
{name: 'بونير وسان يوستاتيوس وسابا', id: 'BES'},
{name: 'البوسنة والهرسك', id: 'BIH'},
{name: 'بوتسوانا', id: 'BWA'},
{name: 'جزيرة بوفيت', id: 'BVT'},
{name: 'البرازيل', id: 'BRA'},
{name: 'المحيط الهندي الإقليم البريطاني في', id: 'IOT'},
{name: 'جزر فرجن البريطانية', id: 'VGB'},
{name: 'بروني دار السلام', id: 'BRN'},
{name: 'بلغاريا', id: 'BGR'},
{name: 'بوركينا فاسو', id: 'BFA'},
{name: 'بوروندي', id: 'BDI'},
{name: 'كابو فيردي', id: 'CPV'},
{name: 'كمبوديا', id: 'KHM'},
{name: 'الكاميرون', id: 'CMR'},
{name: 'كندا', id: 'CAN'},
{name: 'جزر كايمان', id: 'CYM'},
{name: 'جمهورية أفريقيا الوسطى', id: 'CAF'},
{name: 'تشاد', id: 'TCD'},
{name: 'شيلي', id: 'CHL'},
{name: 'الصين', id: 'CHN'},
{name: 'منطقة هونغ كونغ الصينية الإدارية الخاصة', id: 'HKG'},
{name: 'منطقة ماكاو الإدارية الخاصة التابعة للصين', id: 'MAC'},
{name: 'جزيرة كريسماس', id: 'CXR'},
{name: 'جزر كوكوس (كيلينغ)', id: 'CCK'},
{name: 'كولومبيا', id: 'COL'},
{name: 'جزر القمر', id: 'COM'},
{name: 'الكونغو', id: 'COG'},
{name: 'جزر كوك', id: 'COK'},
{name: 'كوستاريكا', id: 'CRI'},
{name: 'كرواتيا', id: 'HRV'},
{name: 'كوبا', id: 'CUB'},
{name: 'كوراساو', id: 'CUW'},
{name: 'قبرص', id: 'CYP'},
{name: 'تشيكيا', id: 'CZE'},
{name: 'كوت ديفوار', id: 'CIV'},
{name: 'جمهورية كوريا الشعبية الديمقراطية', id: 'PRK'},
{name: 'جمهورية الكونغو الديمقراطية', id: 'COD'},
{name: 'الدانمرك', id: 'DNK'},
{name: 'جيبوتي', id: 'DJI'},
{name: 'دومينيكا', id: 'DMA'},
{name: 'الجمهورية الدومينيكية', id: 'DOM'},
{name: 'إكوادور', id: 'ECU'},
{name: 'مصر', id: 'EGY'},
{name: 'السلفادور', id: 'SLV'},
{name: 'غينيا الاستوائية', id: 'GNQ'},
{name: 'إريتريا', id: 'ERI'},
{name: 'إستونيا', id: 'EST'},
{name: 'إثيوبيا', id: 'ETH'},
{name: 'جزر فوكلاند (مالفيناس)', id: 'FLK'},
{name: 'جزر فايرو', id: 'FRO'},
{name: 'فيجي', id: 'FJI'},
{name: 'فنلندا', id: 'FIN'},
{name: 'فرنسا', id: 'FRA'},
{name: 'غيانا الفرنسية', id: 'GUF'},
{name: 'بولينيزيا الفرنسية', id: 'PYF'},
{name: 'الأراضي الفرنسية الجنوبية الجنوبية', id: 'ATF'},
{name: 'غابون', id: 'GAB'},
{name: 'غامبيا', id: 'GMB'},
{name: 'جورجيا', id: 'GEO'},
{name: 'ألمانيا', id: 'DEU'},
{name: 'غانا', id: 'GHA'},
{name: 'جبل طارق', id: 'GIB'},
{name: 'اليونان', id: 'GRC'},
{name: 'غرينلند', id: 'GRL'},
{name: 'غرينادا', id: 'GRD'},
{name: 'غواديلوب', id: 'GLP'},
{name: 'غوام', id: 'GUM'},
{name: 'غواتيمالا', id: 'GTM'},
{name: 'غيرنزي', id: 'GGY'},
{name: 'غينيا', id: 'GIN'},
{name: 'غينيا - بيساو', id: 'GNB'},
{name: 'غيانا', id: 'GUY'},
{name: 'هايتي', id: 'HTI'},
{name: 'جزيرة هيرد وجزر ماكدونالد', id: 'HMD'},
{name: 'الكرسي الرسولي', id: 'VAT'},
{name: 'هندوراس', id: 'HND'},
{name: 'هنغاريا', id: 'HUN'},
{name: 'آيسلندا', id: 'ISL'},
{name: 'الهند', id: 'IND'},
{name: 'إندونيسيا', id: 'IDN'},
{name: 'إيران (جمهورية - الإسلامية)', id: 'IRN'},
{name: 'العراق', id: 'IRQ'},
{name: 'آيرلندا', id: 'IRL'},
{name: 'جزيرة مان', id: 'IMN'},
{name: 'إيطاليا', id: 'ITA'},
{name: 'جامايكا', id: 'JAM'},
{name: 'اليابان', id: 'JPN'},
{name: 'جيرزي', id: 'JEY'},
{name: 'الأردن', id: 'JOR'},
{name: 'كازاخستان', id: 'KAZ'},
{name: 'كينيا', id: 'KEN'},
{name: 'كيريباس', id: 'KIR'},
{name: 'الكويت', id: 'KWT'},
{name: 'قيرغيزستان', id: 'KGZ'},
{name: 'جمهورية لاو الديمقراطية الشعبية', id: 'LAO'},
{name: 'لاتفيا', id: 'LVA'},
{name: 'لبنان', id: 'LBN'},
{name: 'ليسوتو', id: 'LSO'},
{name: 'ليبريا', id: 'LBR'},
{name: 'ليبيا', id: 'LBY'},
{name: 'ليختنشتاين', id: 'LIE'},
{name: 'ليتوانيا', id: 'LTU'},
{name: 'لكسمبرغ', id: 'LUX'},
{name: 'مدغشقر', id: 'MDG'},
{name: 'ملاوي', id: 'MWI'},
{name: 'ماليزيا', id: 'MYS'},
{name: 'ملديف', id: 'MDV'},
{name: 'مالي', id: 'MLI'},
{name: 'مالطة', id: 'MLT'},
{name: 'جزر مارشال', id: 'MHL'},
{name: 'مارتينيك', id: 'MTQ'},
{name: 'موريتانيا', id: 'MRT'},
{name: 'موريشيوس', id: 'MUS'},
{name: 'جزيرة مايوت', id: 'MYT'},
{name: 'المكسيك', id: 'MEX'},
{name: 'ميكرونيزيا (ولايات - الموحدة)', id: 'FSM'},
{name: 'موناكو', id: 'MCO'},
{name: 'منغوليا', id: 'MNG'},
{name: 'الجبل الأسود', id: 'MNE'},
{name: 'مونتسيرات', id: 'MSR'},
{name: 'المغرب', id: 'MAR'},
{name: 'موزامبيق', id: 'MOZ'},
{name: 'ميانمار', id: 'MMR'},
{name: 'ناميبيا', id: 'NAM'},
{name: 'ناورو', id: 'NRU'},
{name: 'نيبال', id: 'NPL'},
{name: 'هولندا', id: 'NLD'},
{name: 'كاليدونيا الجديدة', id: 'NCL'},
{name: 'نيوزيلندا', id: 'NZL'},
{name: 'نيكاراغوا', id: 'NIC'},
{name: 'النيجر', id: 'NER'},
{name: 'نيجيريا', id: 'NGA'},
{name: 'نيوي', id: 'NIU'},
{name: 'جزيرة نورفلك', id: 'NFK'},
{name: 'جزر ماريانا الشمالية', id: 'MNP'},
{name: 'النرويج', id: 'NOR'},
{name: 'عمان', id: 'OMN'},
{name: 'باكستان', id: 'PAK'},
{name: 'بالاو', id: 'PLW'},
{name: 'بنما', id: 'PAN'},
{name: 'بابوا غينيا الجديدة', id: 'PNG'},
{name: 'باراغواي', id: 'PRY'},
{name: 'بيرو', id: 'PER'},
{name: 'الفلبين', id: 'PHL'},
{name: 'بيتكيرن', id: 'PCN'},
{name: 'بولندا', id: 'POL'},
{name: 'البرتغال', id: 'PRT'},
{name: 'بورتوريكو', id: 'PRI'},
{name: 'قطر', id: 'QAT'},
{name: 'جمهورية كوريا', id: 'KOR'},
{name: 'جمهورية مولدوفا', id: 'MDA'},
{name: 'رومانيا', id: 'ROU'},
{name: 'الاتحاد الروسي', id: 'RUS'},
{name: 'رواندا', id: 'RWA'},
{name: 'ريونيون', id: 'REU'},
{name: 'سان بارتليمي', id: 'BLM'},
{name: 'سانت هيلانة', id: 'SHN'},
{name: 'سانت كيتس ونيفس', id: 'KNA'},
{name: 'سانت لوسيا', id: 'LCA'},
{name: 'سان مارتن', id: 'MAF'},
{name: 'سان بيار وميكلون', id: 'SPM'},
{name: 'سانت فنسنت وجزر غرينادين', id: 'VCT'},
{name: 'ساموا', id: 'WSM'},
{name: 'سان مارينو', id: 'SMR'},
{name: 'سان تومي وبرينسيبي', id: 'STP'},
{name: 'سارك', id: 'null'},
{name: 'المملكة العربية السعودية', id: 'SAU'},
{name: 'السنغال', id: 'SEN'},
{name: 'صربيا', id: 'SRB'},
{name: 'سيشيل', id: 'SYC'},
{name: 'سيراليون', id: 'SLE'},
{name: 'سنغافورة', id: 'SGP'},
{name: 'سانت مارتن', id: 'SXM'},
{name: 'سلوفاكيا', id: 'SVK'},
{name: 'سلوفينيا', id: 'SVN'},
{name: 'جزر سليمان', id: 'SLB'},
{name: 'الصومال', id: 'SOM'},
{name: 'جنوب أفريقيا', id: 'ZAF'},
{name: 'جورجيا الجنوبية وجزر ساندويتش الجنوبية', id: 'SGS'},
{name: 'جنوب السودان', id: 'SSD'},
{name: 'إسبانيا', id: 'ESP'},
{name: 'سري لانكا', id: 'LKA'},
{name: 'دولة فلسطين', id: 'PSE'},
{name: 'السودان', id: 'SDN'},
{name: 'سورينام', id: 'SUR'},
{name: 'جزر سفالبارد وجان ماين', id: 'SJM'},
{name: 'سوازيلند', id: 'SWZ'},
{name: 'السويد', id: 'SWE'},
{name: 'سويسرا', id: 'CHE'},
{name: 'الجمهورية العربية السورية', id: 'SYR'},
{name: 'طاجيكستان', id: 'TJK'},
{name: 'تايلند', id: 'THA'},
{name: 'جمهورية مقدونيا اليوغوسلافية سابقاً', id: 'MKD'},
{name: 'تيمور- ليشتي', id: 'TLS'},
{name: 'توغو', id: 'TGO'},
{name: 'توكيلاو', id: 'TKL'},
{name: 'تونغا', id: 'TON'},
{name: 'ترينيداد وتوباغو', id: 'TTO'},
{name: 'تونس', id: 'TUN'},
{name: 'تركيا', id: 'TUR'},
{name: 'تركمانستان', id: 'TKM'},
{name: 'جزر تركس وكايكوس', id: 'TCA'},
{name: 'توفالو', id: 'TUV'},
{name: 'أوغندا', id: 'UGA'},
{name: 'أوكرانيا', id: 'UKR'},
{name: 'الإمارات العربية المتحدة', id: 'ARE'},
{name: 'المملكة المتحدة لبريطانيا العظمى وآيرلندا الشمالية', id: 'GBR'},
{name: 'جمهورية تنزانيا المتحدة', id: 'TZA'},
{name: 'نائية التابعة للولايات المتحدة', id: 'UMI'},
{name: 'جزر فرجن التابعة للولايات المتحدة', id: 'VIR'},
{name: 'الولايات المتحدة الأمريكية', id: 'USA'},
{name: 'أوروغواي', id: 'URY'},
{name: 'أوزبكستان', id: 'UZB'},
{name: 'فانواتو', id: 'VUT'},
{name: 'فنزويلا (جمهورية - البوليفارية)', id: 'VEN'},
{name: 'فييت نام', id: 'VNM'},
{name: 'جزر واليس وفوتونا', id: 'WLF'},
{name: 'الصحراء الغربية', id: 'ESH'},
{name: 'اليمن', id: 'YEM'},
{name: 'زامبيا', id: 'ZMB'},
{name: 'زمبابوي', id: 'ZWE'},
{name: 'جزر ألاند', id: 'ALA'}
];
//هنا تتم عملية تعريب أسماء الدول
for(var i = 0; i < Datamap.prototype.worldTopo.objects.world.geometries.length; ++i){
  for(var j = 0; j < countriesAr.length; ++j){
    if(Datamap.prototype.worldTopo.objects.world.geometries[i].id == countriesAr[j].id){
      Datamap.prototype.worldTopo.objects.world.geometries[i].properties.name = countriesAr[j].name;
    }
  }
}