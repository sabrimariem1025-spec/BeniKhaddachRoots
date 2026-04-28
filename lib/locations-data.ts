export interface Location {
  id: string;
  name: string;
  nameAr: string;
  nameFr: string;
  type: 'site' | 'artisan' | 'guesthouse' | 'food';
  description: string;
  descriptionAr: string;
  descriptionFr: string;
  latitude: number;
  longitude: number;
  image: string;
  logo: string;
  audioStory: string;
  audioStoryAr: string;
  address: string;
  addressAr: string;
  addressFr: string;
  contact?: string;
  owner?: string;
  rating?: number;
  category?: string;
}

export const locationsData: Location[] = [
  {
    id: 'dar-hayet',
    name: 'Dar-Hayet',
    nameAr: 'دار حياة',
    nameFr: 'Dar Hayet',
    type: 'guesthouse',
    owner: 'Ayoub Zammouri',
    description: 'A traditional guesthouse nestled in the heart of Beni Khaddach, offering an authentic mountain experience.',
    descriptionAr: 'دار ضيافة تقليدية في قلب بني خداش، تقدم تجربة جبلية أصيلة',
    descriptionFr: 'Une maison d\'hôtes traditionnelle au cœur de Beni Khaddach, offrant une expérience montagnarde authentique.',
 latitude: 33.26548,
    longitude: 10.16275,
    image: '/darhayet.jpg',
    logo: '/logo1.jpg',
    audioStory: 'Welcome to Dar Hayet, a warm and authentic guesthouse managed by Ayoub Zammouri.',
    audioStoryAr: 'مرحباً بكم في دار حياة، دار ضيافة دافئة وأصيلة يديرها أيوب زموري',
    address: 'Beni Khaddach',
    addressAr: 'بني خداش',
    addressFr: 'Beni Khaddach',
    contact: '22 183 382',
    rating: 5.0,
  },
  {
    id: 'dar-naim',
    name: 'Dar Naïm',
    nameAr: 'دار نعيم',
    nameFr: 'Dar Naïm',
    type: 'guesthouse',
    owner: 'Monsef Bousanouga Zammouri — Gérant : Tej Eddine Zaghdan',
    description: 'Dar Naïm offers comfortable rooms with a stunning view of the mountains and traditional Tunisian hospitality.',
    descriptionAr: 'اقامة دار النعيم زمور توفر غرفاً مريحة بإطلالة رائعة على الجبال وضيافة تونسية تقليدية',
    descriptionFr: 'Dar Naïm propose des chambres confortables avec une vue imprenable sur les montagnes et une hospitalité tunisienne traditionnelle.',
 latitude: 33.26190,
    longitude: 10.18134,
    image: '/darennaim.jpg',
    logo: '/logo2.jpg',
    audioStory: 'Welcome to Dar Naïm, managed by Tej Eddine Zaghdan, a haven of tranquility in the mountains.',
    audioStoryAr: 'مرحباً بكم فياقامة دار النعيم زمور، يديرها تاج الدين زغدان، واحة هدوء في الجبال',
    address: 'Beni Khaddach',
    addressAr: 'بني خداش',
    addressFr: 'Beni Khaddach',
    contact: '50 418 968',
    rating: 4.8,
  },
  {
    id: 'dar-jeddi',
    name: 'Dar Jeddi',
    nameAr: 'دار جدي',
    nameFr: 'Dar Jeddi',
    type: 'guesthouse',
    owner: 'Mohamed Zammouri',
    description: 'Dar Jeddi is a heritage house that preserves the ancestral architecture and traditions of Beni Khaddach.',
    descriptionAr: 'دار جدي بيت تراثي يحافظ على العمارة والتقاليد الأجدادية لبني خداش',
    descriptionFr: 'Dar Jeddi est une maison du patrimoine qui préserve l\'architecture et les traditions ancestrales de Beni Khaddach.',
 
  latitude: 33.2698644,
longitude: 10.1834714,
    image: '/darjeddi.jpg',
    logo: '/logo3.jpg',
    audioStory: 'Welcome to Dar Jeddi, a timeless house where history and hospitality meet.',
    audioStoryAr: 'مرحباً بكم في دار جدي، بيت خارج الزمن حيث يلتقي التاريخ بالضيافة',
    address: 'Beni Khaddach',
    addressAr: 'بني خداش',
    addressFr: 'Beni Khaddach',
    contact: '23 275 144',
    rating: 4.6,
  },
  {
    id: 'dar-saber',
    name: 'Dar Saber',
    nameAr: 'دار صابر',
    nameFr: 'Dar Saber',
    type: 'guesthouse',
    owner: 'Belgacem Saber Zammouri',
    description: 'Dar Saber welcomes you with the warmth of a family home and the charm of traditional Berber décor.',
    descriptionAr: 'دار صابر يرحب بكم بدفء البيت العائلي وسحر الديكور البربري التقليدي',
    descriptionFr: 'Dar Saber vous accueille avec la chaleur d\'une maison familiale et le charme d\'une décoration berbère traditionnelle.',
  latitude: 33.26510,
    longitude: 10.18250,
    image: '/darsaber.jpg',
    logo: '/darsaber.jpg',
    audioStory: 'Welcome to Dar Saber, where Belgacem Saber Zammouri offers you a true taste of local life.',
    audioStoryAr: 'مرحباً بكم في دار صابر، حيث يقدم لكم بلقاسم صابر زموري تجربة الحياة المحلية الحقيقية',
    address: 'Beni Khaddach',
    addressAr: 'بني خداش',
    addressFr: 'Beni Khaddach',
    contact: '98 232 818',
    rating: 4.2,
  },
  {
    id: 'dar-sana',
    name: 'Dar Sana',
    nameAr: 'دار سناء',
    nameFr: 'Dar Sana',
    type: 'guesthouse',
    owner: 'Nasser Saadaoui',
    description: 'Dar Sana is located near Ksar Hallouf, offering breathtaking landscapes and a peaceful retreat.',
    descriptionAr: 'دار سناء تقع بالقرب من قصر حلوف، وتوفر مناظر خلابة وملاذاً هادئاً',
    descriptionFr: 'Dar Sana est située près du Ksar Hallouf, offrant des paysages à couper le souffle et un havre de paix.',
  latitude: 33.29308,
    longitude: 10.15303,
    image: '/darsana.jpg',
    logo: '/logo4.jpg',
    audioStory: 'Welcome to Dar Sana, near the famous Ksar Hallouf, managed by Nasser Saadaoui.',
    audioStoryAr: 'مرحباً بكم في دار سناء، بالقرب من قصر حلوف الشهير، يديرها ناصر السعداوي',
    address: 'Ksar Hallouf, Beni Khaddach',
    addressAr: 'قصر حلوف، بني خداش',
    addressFr: 'Ksar Hallouf, Beni Khaddach',
    contact: '25 275 221',
    rating: 4.5,
  },
  {
  id: 'ksar-hallouf',
  name: 'Ksar Hallouf',
  nameAr: 'قصر حلوف',
  nameFr: 'Ksar Hallouf',
  type: 'site',

  owner: '',

  description: 'Ancient Berber granary located in the mountains of Beni Khaddach.',
  descriptionAr: 'قصر أمازيغي قديم في جبال بني خداش كان يستعمل لتخزين الحبوب.',
  descriptionFr: 'Ancien grenier berbère situé dans les montagnes de Beni Khaddach.',

  latitude: 33.2931,
  longitude: 10.1530,

  image: '/im1.webp',
  logo: '/im1.webp',

  audioStory: 'Ancient ksar used for storing grain and protecting families.',
  audioStoryAr: 'قصر قديم لتخزين الحبوب وحماية العائلات.',

  address: 'Beni Khaddach Mountains, Médenine',
  addressAr: 'جبال بني خداش، مدنين',
  addressFr: 'Montagnes de Beni Khaddach, Médenine',

},
{
  id: 'ksar-jouama',
  name: 'Ksar Jouama',
  nameAr: 'قصر الجوامع',
  nameFr: 'Ksar Jouama',
  type: 'site',

  owner: '',

  description: 'Traditional fortified ksar used by local Berber families.',
  descriptionAr: 'قصر تقليدي محصن كان تستعمله العائلات الأمازيغية.',
  descriptionFr: 'Ksar traditionnel fortifié utilisé par les familles berbères locales.',

  latitude: 33.2705,
  longitude: 10.1802,

  image: '/im2.jpg',
  logo: '/im2.jpg',

  audioStory: 'A heritage ksar reflecting the Amazigh lifestyle.',
  audioStoryAr: 'قصر تراثي يعكس نمط حياة الأمازيغ.',

  address: 'Beni Khaddach',
  addressAr: 'بني خداش',
  addressFr: 'Beni Khaddach',

},
{
  id: 'ain-el-anba',
  name: 'Ain El Anba',
  nameAr: 'عين العنبة',
  nameFr: 'Ain El Anba',
  type: 'site',

  owner: '',

  description: 'Ain El Anba is a mountain in Beni Khaddach distinguished by its beautiful natural landscape, steep rocky slopes, and natural caves that give it a unique and attractive character.',

  descriptionAr: 'عين العنبة جبل في بني خداش يتميز بجمال طبيعته وتضاريسه الجبلية، ومنحدراته الصخرية ومغاراته الطبيعية التي تمنحه طابعًا مميزًا.',

  descriptionFr: 'Ain El Anba est une montagne à Beni Khaddach qui se distingue par la beauté de son paysage naturel, ses pentes rocheuses abruptes et ses grottes naturelles qui lui donnent un caractère unique.',

  latitude: 33.2550,
  longitude: 10.1700,

  image: '/im3.jpg',
  logo: '/im3.jpg',

  audioStory: 'Ain El Anba is a mountain in Beni Khaddach known for its natural beauty, rocky slopes, and caves that make it a unique landscape.',

  audioStoryAr: 'عين العنبة جبل في بني خداش يتميز بجماله الطبيعي ومنحدراته الصخرية ومغاراته التي تعطيه طابعًا فريدًا.',

  address: 'Beni Khaddach, Médenine, Tunisia',
  addressAr: 'بني خداش، مدنين، تونس',
  addressFr: 'Beni Khaddach, Médenine, Tunisie',

}
];