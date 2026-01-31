import { Location } from './locations-data';

// Extended list of 195+ archaeological sites in Beni Khaddach region
// These are realistic fictional sites based on the region's actual archaeology
export const archaeologicalSites: Location[] = [
  {
    id: 'site-001',
    name: 'Hilltop Ksar Remains',
    nameAr: 'بقايا القصر الجبلي',
    type: 'site',
    description: 'Remains of a traditional Amazigh hilltop ksar.',
    descriptionAr: 'بقايا قصر جبلي أمازيغي تقليدي.',
    latitude: 36.445,
    longitude: 9.123,
    image: 'https://images.unsplash.com/photo-1632621471074-512a0b13d2f6?w=400&h=300&fit=crop',
    audioStory: 'These remains reflect collective mountain life.',
    audioStoryAr: 'تعكس هذه البقايا نمط العيش الجماعي في الجبال.',
    addressAr: 'قمة الجبل',
    address: 'Hilltop',
    rating: 4.7,
  },
  {
    id: 'site-002',
    name: 'Ancient Stone Structures',
    nameAr: 'منشآت حجرية قديمة',
    type: 'site',
    description: 'Stone structures indicating ancient human presence.',
    descriptionAr: 'منشآت حجرية تشير إلى استقرار بشري قديم.',
    latitude: 36.44,
    longitude: 9.12,
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe3e?w=400&h=300&fit=crop',
    audioStory: 'Evidence of long-term settlement.',
    audioStoryAr: 'دلائل على استقرار بشري طويل الأمد.',
    addressAr: 'المناطق الجبلية',
    address: 'Mountain Area',
    rating: 4.3,
  },
  {
    id: 'site-003',
    name: 'Ancient Passage Routes',
    nameAr: 'مسالك عبور قديمة',
    type: 'site',
    description: 'Traces of ancient passage routes across the region.',
    descriptionAr: 'آثار لمسالك عبور قديمة عبر المنطقة.',
    latitude: 36.446,
    longitude: 9.118,
    image: 'https://images.unsplash.com/photo-1518152006292-47510884edd3?w=400&h=300&fit=crop',
    audioStory: 'The region served as a natural crossing point.',
    audioStoryAr: 'كانت المنطقة نقطة عبور طبيعية.',
    addressAr: 'المسالك الجبلية',
    address: 'Ancient Paths',
    rating: 4.2,
  },
  {
    id: 'site-004',
    name: 'Traditional Pottery Area',
    nameAr: 'منطقة صناعة الفخار القديمة',
    type: 'site',
    description: 'Indicators of traditional pottery activities.',
    descriptionAr: 'مؤشرات على نشاط صناعة الفخار التقليدية.',
    latitude: 36.443,
    longitude: 9.124,
    image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=300&fit=crop',
    audioStory: 'Pottery has deep roots in the region.',
    audioStoryAr: 'لصناعة الفخار جذور عميقة في المنطقة.',
    addressAr: 'حي الحرفيين',
    address: 'Artisan Area',
    rating: 4.4,
  },
  {
    id: 'site-005',
    name: 'Natural Spring Area',
    nameAr: 'محيط عين الماء',
    type: 'site',
    description: 'Area surrounding a natural water spring.',
    descriptionAr: 'موقع يحيط بعين ماء طبيعية.',
    latitude: 36.448,
    longitude: 9.118,
    image: 'https://images.unsplash.com/photo-1500439529335-8e92f1230ba1?w=400&h=300&fit=crop',
    audioStory: 'Water shaped settlement patterns.',
    audioStoryAr: 'شكّلت المياه أنماط الاستقرار البشري.',
    addressAr: 'الوادي',
    address: 'Valley Area',
    rating: 4.5,
  },
];


// Generate additional 185+ sites for demonstration
function generateAdditionalSites(): Location[] {
  const sites: Location[] = [];
  const baseLatitude = 36.445;
  const baseLongitude = 9.122;

  const typeNames = {
    site: ['Ruins', 'Ancient Structure', 'Settlement', 'Monument', 'Archaeological Site'],
    siteAr: ['أطلال', 'هيكل قديم', 'تجمع سكاني', 'نصب', 'موقع أثري'],
  };

  for (let i = 11; i <= 195; i++) {
    // Generate nearby coordinates with slight variations
    const latOffset = (Math.random() - 0.5) * 0.05;
    const lonOffset = (Math.random() - 0.5) * 0.05;

    const typeIndex = Math.floor(Math.random() * typeNames.site.length);

    sites.push({
      id: `site-${String(i).padStart(3, '0')}`,
      name: `${typeNames.site[typeIndex]} ${i}`,
      nameAr: `${typeNames.siteAr[typeIndex]} ${i}`,
      type: 'site',
      description: `Archaeological site showing evidence of ancient occupation and settlement patterns.`,
      descriptionAr: `موقع أثري يظهر أدلة على الاحتلال والأنماط الاستيطانية القديمة.`,
      latitude: baseLatitude + latOffset,
      longitude: baseLongitude + lonOffset,
      image: 'https://images.unsplash.com/photo-1518152006292-47510884edd3?w=400&h=300&fit=crop',
      audioStory: `This is archaeological site number ${i} in the Beni Khaddach region.`,
      audioStoryAr: `هذا الموقع الأثري رقم ${i} في منطقة بني خداش.`,
      address: `Location ${i}`,
      addressAr: `الموقع ${i}`,
      rating: 3.5 + Math.random() * 1.4,
    });
  }

  return sites;
}

// Combine main sites with generated additional sites
export const allArchaeologicalSites = [
  ...archaeologicalSites,
  ...generateAdditionalSites(),
];
