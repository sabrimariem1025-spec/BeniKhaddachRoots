export interface Location {
  id: string;
  name: string;
  nameAr: string;
  type: 'site' | 'artisan' | 'guesthouse' | 'food';
  description: string;
  descriptionAr: string;
  latitude: number;
  longitude: number;
  image: string;
  audioStory: string;
  audioStoryAr: string;
  address: string;
  addressAr: string;
  contact?: string;
  rating?: number;
  category?: string;
}

// Main locations data - simplified version with only key places
export const locationsData: Location[] = [
  // 🏰 معالم أثرية
  {
    id: 'qalaa-beni-khaddach',
    name: 'Qaala Beni Khaddach',
    nameAr: 'قصر بني خداش الجبلي',
    type: 'site',
    description:
      'The hilltop ksar of Beni Khaddach reflects centuries of Amazigh mountain life. Built as a collective storage and refuge, it symbolizes resilience and solidarity.',
    descriptionAr:
      'يعكس قصر بني خداش الجبلي قروناً من نمط العيش الأمازيغي في المناطق الجبلية. استُخدم كمخزن جماعي وملجأ، ويرمز إلى الصمود والتضامن.',
    latitude: 36.445,
    longitude: 9.123,
    image: '/1.jpg',
    audioStory:
      'Welcome to the hilltop ksar of Beni Khaddach, a symbol of Amazigh heritage and mountain resilience.',
    audioStoryAr:
      'مرحباً بكم في قصر بني خداش الجبلي، رمز التراث الأمازيغي والصمود في البيئة الجبلية.',
    addressAr: 'قمة جبل بني خداش',
    address: 'Beni Khaddach Hilltop',
    rating: 4.8,
  },
  {
    id: 'ksour-collection',
    name: 'Mountain Ksour Complex',
    nameAr: 'مجموعة القصور الجبلية',
    type: 'site',
    description:
      'A group of traditional Amazigh ksour used for storage and protection.',
    descriptionAr:
      'مجموعة من القصور الأمازيغية التقليدية استُخدمت للتخزين والحماية.',
    latitude: 36.448,
    longitude: 9.122,
    image: '/2.jpg',
    audioStory:
      'These ksour reflect collective life and cooperation.',
    audioStoryAr:
      'تعكس هذه القصور نمط العيش الجماعي والتعاون.',
    addressAr: 'مرتفعات بني خداش',
    address: 'Beni Khaddach Highlands',
    rating: 4.8,
  },
  {
    id: 'rock-houses',
    name: 'Rock-Carved Houses',
    nameAr: 'المساكن المحفورة في الصخر',
    type: 'site',
    description:
      'Traditional homes carved into rock for climate adaptation.',
    descriptionAr:
      'مساكن تقليدية محفورة في الصخر للتكيّف مع المناخ القاسي.',
    latitude: 36.446,
    longitude: 9.121,
    image: '/3.jpg',
    audioStory:
      'Rock houses provided insulation and safety.',
    audioStoryAr:
      'وفّرت المساكن الصخرية العزل والحماية.',
    addressAr: 'الجبال المحيطة',
    address: 'Surrounding Hills',
    rating: 4.6,
  },
  {
    id: 'ancient-watchpoint',
    name: 'Ancient Mountain Watchpoint',
    nameAr: 'نقطة مراقبة جبلية قديمة',
    type: 'site',
    description:
      'Elevated stone structure used for observation and protection.',
    descriptionAr:
      'بقايا منشأة حجرية مرتفعة استُعملت للمراقبة والحماية.',
    latitude: 36.45,
    longitude: 9.13,
    image: '/4.jpg',   
     audioStory:
      'Strategic views allowed early warning and defense.',
    audioStoryAr:
      'وفّرت المرتفعات إنذاراً مبكراً وحماية.',
    addressAr: 'المرتفعات الشرقية',
    address: 'Eastern Heights',
    rating: 4.3,
  },

  // 🕌 مساجد ومعالم دينية
  {
    id: 'aloula-hafri-mosque',
    name: 'Aloula Hafri Mosque',
    nameAr: 'جامع علولة الحفري',
    type: 'site',
    description:
      'An ancient underground mosque carved into the rock, reflecting traditional religious architecture of southern Tunisia.',
    descriptionAr:
      'جامع أثري محفور في الصخر يعكس العمارة الدينية التقليدية في جنوب تونس.',
    latitude: 36.444,
    longitude: 9.119,
    image: '/5.jpg',   
    audioStory:
      'This mosque represents a unique way of adapting religious architecture to the mountain environment.',
    audioStoryAr:
      'يمثل هذا الجامع أسلوباً فريداً في تكييف العمارة الدينية مع البيئة الجبلية.',
    addressAr: 'جبال بني خداش',
    address: 'Beni Khaddach Mountains',
    rating: 4.7,
  },
  {
    id: 'old-mountain-mosque',
    name: 'Old Mountain Mosque',
    nameAr: 'المسجد الجبلي القديم',
    type: 'site',
    description:
      'A small historic mosque serving mountain communities for generations.',
    descriptionAr:
      'مسجد تاريخي صغير خدم سكان الجبال عبر أجيال متعاقبة.',
    latitude: 36.447,
    longitude: 9.117,
    image: '/6.jpg',   
    audioStory:
      'A spiritual gathering place deeply rooted in local daily life.',
    audioStoryAr:
      'مكان روحي متجذر في الحياة اليومية للسكان المحليين.',
    addressAr: 'المنطقة الجبلية',
    address: 'Mountain Area',
    rating: 4.4,
  },

  // 🛍️ فضاءات تقليدية وأسواق
  {
    id: 'medina-souk',
    name: 'Traditional Market Area',
    nameAr: 'الفضاء التقليدي والسوق',
    type: 'site',
    description:
      'A traditional local market area where daily life, trade, and cultural exchange continue as they have for generations.',
    descriptionAr:
      'فضاء تقليدي يعكس الحياة اليومية والتبادل التجاري والثقافي كما توارثته الأجيال.',
    latitude: 36.442,
    longitude: 9.121,
    image: '/7.jpg',   
    audioStory:
      'This market reflects the social and economic heart of the local community.',
    audioStoryAr:
      'يمثل هذا السوق القلب الاجتماعي والاقتصادي للمجتمع المحلي.',
    addressAr: 'وسط بني خداش',
    address: 'City Center',
    rating: 4.6,
  },

  // 💧 منابع طبيعية
  {
    id: 'water-spring',
    name: 'Natural Water Spring',
    nameAr: 'عين الماء الطبيعية',
    type: 'site',
    description:
      'A natural water source relied upon by the local population for generations.',
    descriptionAr:
      'عين ماء طبيعية اعتمد عليها سكان المنطقة كمصدر أساسي للحياة عبر الأجيال.',
    latitude: 36.448,
    longitude: 9.118,
    image: '/8.jpg',   
    audioStory:
      'Water has always been the foundation of life in this mountainous region.',
    audioStoryAr:
      'كانت المياه دائماً أساس الحياة في هذه المنطقة الجبلية.',
    addressAr: 'الجهة الشمالية الغربية',
    address: 'Northwest Area',
    rating: 4.5,
  },
  {
    id: 'ancient-valley-paths',
    name: 'Ancient Valley Paths',
    nameAr: 'المسالك القديمة في الوادي',
    type: 'site',
    description:
      'Historic paths connecting mountain settlements.',
    descriptionAr:
      'مسالك قديمة كانت تربط بين التجمعات الجبلية.',
    latitude: 36.444,
    longitude: 9.115,
    image: '/9.jpg',   
    audioStory:
      'These paths shaped movement and trade.',
    audioStoryAr:
      'شكّلت هذه المسالك التنقل والتبادل.',
    addressAr: 'الوديان المجاورة',
    address: 'Nearby Valleys',
    rating: 4.2,
  },
  {
    id: 'olive-terraces',
    name: 'Ancient Olive Terraces',
    nameAr: 'المدرجات الزراعية القديمة',
    type: 'site',
    description:
      'Stone agricultural terraces used for olive cultivation.',
    descriptionAr:
      'مدرجات حجرية زراعية استُعملت لزراعة الزيتون.',
    latitude: 36.449,
    longitude: 9.116,
    image: '/10.jpg',   
    audioStory:
      'Agriculture adapted to mountain landscapes.',
    audioStoryAr:
      'تكيفت الفلاحة مع الطبيعة الجبلية.',
    addressAr: 'الأراضي الجبلية',
    address: 'Mountain Farmland',
    rating: 4.5,
  },

  // 🎨 حرف تقليدية
  {
    id: 'artisan-pottery',
    name: 'Traditional Pottery Workshop',
    nameAr: 'ورشة الفخار التقليدي',
    type: 'artisan',
    description:
      'Local artisans continue the ancient tradition of handmade pottery using traditional techniques.',
    descriptionAr:
      'يواصل الحرفيون المحليون تقليد صناعة الفخار اليدوي باستخدام تقنيات تقليدية.',
    latitude: 36.441,
    longitude: 9.122,
    image: '/11.jpg',   
    audioStory:
      'Pottery is a living heritage passed from one generation to another.',
    audioStoryAr:
      'الفخار تراث حي ينتقل من جيل إلى جيل.',
    addressAr: 'حي الحرفيين',
    address: 'Artisan Quarter',
    category: 'Pottery',
  },
  {
    id: 'artisan-weaving',
    name: 'Traditional Weaving',
    nameAr: 'النسيج التقليدي',
    type: 'artisan',
    description:
      'Traditional weaving practices reflecting the cultural identity of the region.',
    descriptionAr:
      'ممارسات النسيج التقليدي التي تعكس الهوية الثقافية للمنطقة.',
    latitude: 36.443,
    longitude: 9.124,
    image: '/12.jpg',   
    audioStory:
      'Every textile tells a story of heritage and craftsmanship.',
    audioStoryAr:
      'كل قطعة نسيج تحكي قصة تراث وحرفية.',
    addressAr: 'زقاق الحرفيات',
    address: 'Artisan Alley',
    category: 'Textiles',
  }
];

