'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Footer } from '@/components/footer';
import { ArrowLeft, Star, MapPin, Phone, Wifi, Users, Utensils } from 'lucide-react';
import Link from 'next/link';

const guesthouses = [
  {
    id: 'riad-1',
    name: 'Riad Beni Khaddach',
    nameAr: 'رياض بني خداش',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=350&fit=crop',
    description:
      'A charming traditional riad offering authentic hospitality in the heart of the medina. Comfortable rooms with beautiful courtyards and traditional Tunisian hospitality.',
    descriptionAr:
      'رياض تقليدي رائع يقدم الضيافة الأصيلة في قلب المدينة القديمة. غرف مريحة مع فنادق جميلة والضيافة التونسية التقليدية.',
    address: 'Old Medina, Beni Khaddach',
    addressAr: 'المدينة القديمة، بني خداش',
    latitude: 36.442,
    longitude: 9.121,
    phone: '+216 XX XXX XXX',
    rating: 4.7,
    reviews: 128,
    price: '45-65 TND/night',
    amenities: ['WiFi', 'Traditional Courtyard', 'Restaurant', 'Guide Service'],
    amenitiesAr: ['واي فاي', 'فناء تقليدي', 'مطعم', 'خدمة دليل'],
    rooms: 8,
    about:
      'Experience true Tunisian hospitality at this beautifully restored traditional riad. The owner and family welcome guests like old friends, sharing stories and meals.',
    aboutAr:
      'اختبر الضيافة التونسية الحقيقية في هذا الرياض التقليدي المستعاد بجمال. يستقبل صاحب المنزل والعائلة الضيوف مثل الأصدقاء القدماء، ويشاركون القصص والوجبات.',
  },
  {
    id: 'garden-1',
    name: 'Garden House Retreat',
    nameAr: 'منزل الحديقة',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=500&h=350&fit=crop',
    description:
      'A peaceful retreat surrounded by olive groves and gardens. Perfect for those seeking tranquility and connection with nature.',
    descriptionAr: 'ملاذ هادئ محاط بأشجار الزيتون والحدائق. مثالي لأولئك الذين يبحثون عن الهدوء والطبيعة.',
    address: 'Outside City, Beni Khaddach',
    addressAr: 'خارج المدينة، بني خداش',
    latitude: 36.45,
    longitude: 9.12,
    phone: '+216 XX XXX XXX',
    rating: 4.9,
    reviews: 95,
    price: '55-75 TND/night',
    amenities: ['WiFi', 'Swimming Pool', 'Garden Tours', 'Farm-to-Table'],
    amenitiesAr: ['واي فاي', 'حمام السباحة', 'جولات الحديقة', 'من المزرعة إلى الطاولة'],
    rooms: 6,
    about:
      'Nestled among ancient olive trees, this serene retreat offers the perfect escape. Wake up to the sound of birds and the scent of orange blossoms.',
    aboutAr:
      'متوطنة بين أشجار الزيتون القديمة، توفر هذه الملاذ الهادئ الهروب المثالي. استيقظ على صوت الطيور ورائحة أزهار البرتقال.',
  },
  {
    id: 'heritage-1',
    name: 'Heritage House',
    nameAr: 'بيت التراث',
    image: 'https://images.unsplash.com/photo-1618886827585-2350c8981fa7?w=500&h=350&fit=crop',
    description:
      'A renovated traditional house that preserves authentic architecture while providing modern comfort. Located near the main archaeological sites.',
    descriptionAr:
      'منزل تقليدي مجدد يحافظ على العمارة الأصيلة مع توفير الراحة الحديثة. يقع بالقرب من المواقع الأثرية الرئيسية.',
    address: 'Near Main Square, Beni Khaddach',
    addressAr: 'بالقرب من الساحة الرئيسية، بني خداش',
    phone: '+216 XX XXX XXX',
    rating: 4.6,
    reviews: 82,
    price: '40-60 TND/night',
    amenities: ['WiFi', 'Central Location', 'Breakfast Included', 'Tour Desk'],
    amenitiesAr: ['واي فاي', 'موقع مركزي', 'الإفطار مشمول', 'مكتب السفر'],
    rooms: 10,
    about:
      'This carefully restored house combines traditional architecture with modern amenities. Perfect base for exploring the historical treasures of Beni Khaddach.',
    aboutAr:
      'يجمع هذا المنزل المستعاد بعناية بين العمارة التقليدية والمرافق الحديثة. قاعدة مثالية لاستكشاف الكنوز التاريخية لبني خداش.',
  },
];

interface GuesthouseCardProps {
  guesthouse: (typeof guesthouses)[0];
  language: 'en' | 'ar';
  onSelect?: () => void;
}

function GuesthouseCard({ guesthouse, language, onSelect }: GuesthouseCardProps) {
  return (
    <Card className='overflow-hidden hover:shadow-lg transition-shadow cursor-pointer' onClick={onSelect}>
      <div className='relative w-full h-64 bg-muted overflow-hidden'>
        <img
          src={guesthouse.image || "/placeholder.svg"}
          alt={language === 'en' ? guesthouse.name : guesthouse.nameAr}
          className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
        />
        <div className='absolute top-4 right-4'>
          <Badge className='bg-accent text-accent-foreground'>
            {guesthouse.price}
          </Badge>
        </div>
      </div>

      <div className='p-4 space-y-3'>
        <div>
          <h3 className='text-lg font-bold text-primary'>
            {language === 'en' ? guesthouse.name : guesthouse.nameAr}
          </h3>
          <div className='flex items-center gap-1 text-sm text-muted-foreground mt-1'>
            <MapPin className='h-4 w-4' />
            {language === 'en' ? guesthouse.address : guesthouse.addressAr}
          </div>
        </div>

        <p className='text-sm text-foreground line-clamp-2'>
          {language === 'en' ? guesthouse.description : guesthouse.descriptionAr}
        </p>

        <div className='grid grid-cols-2 gap-2 text-xs'>
          <div className='flex items-center gap-2'>
            <Star className='h-4 w-4 fill-accent text-accent' />
            <span className='font-semibold'>{guesthouse.rating}/5 ({guesthouse.reviews})</span>
          </div>
          <div className='flex items-center gap-2'>
            <Users className='h-4 w-4 text-secondary' />
            <span>{guesthouse.rooms} rooms</span>
          </div>
        </div>

        <div className='flex flex-wrap gap-1 pt-2 border-t border-border'>
          {(language === 'en' ? guesthouse.amenities : guesthouse.amenitiesAr)
            .slice(0, 3)
            .map((amenity, idx) => (
              <Badge key={idx} variant='outline' className='text-xs'>
                {amenity}
              </Badge>
            ))}
        </div>

        <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm'>
          {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
        </Button>
      </div>
    </Card>
  );
}

export default function GuesthousesPage() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedGuesthouse = guesthouses.find((g) => g.id === selectedId);

  return (
    <div className='min-h-screen bg-background text-foreground'>
      {/* Header */}
      <header className='sticky top-0 z-40 bg-card border-b border-border shadow-sm'>
        <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <Link href='/'>
              <Button variant='ghost' size='icon'>
                <ArrowLeft className='h-5 w-5' />
              </Button>
            </Link>
            <div>
              <h1 className='text-2xl font-bold text-primary'>
                {language === 'en' ? 'Stay in Beni Khaddach' : 'ابق في بني خداش'}
              </h1>
              <p className='text-sm text-muted-foreground'>
                {language === 'en'
                  ? 'Authentic guesthouses and accommodations'
                  : 'دور ضيافة وسكن أصيلة'}
              </p>
            </div>
          </div>

          <Button
            variant='outline'
            size='sm'
            onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
          >
            {language === 'en' ? 'العربية' : 'English'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className='container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-3 gap-8'>
        {/* Guesthouses Grid */}
        <div className='lg:col-span-2'>
          <div className='grid grid-cols-1 gap-6'>
            {guesthouses.map((guesthouse) => (
              <GuesthouseCard
                key={guesthouse.id}
                guesthouse={guesthouse}
                language={language}
                onSelect={() => setSelectedId(guesthouse.id)}
              />
            ))}
          </div>
        </div>

        {/* Sidebar - Selected Details */}
        <div className='lg:col-span-1'>
          {selectedGuesthouse ? (
            <Card className='sticky top-20 p-6 space-y-4'>
              <div>
                <h2 className='text-xl font-bold text-primary mb-2'>
                  {language === 'en'
                    ? selectedGuesthouse.name
                    : selectedGuesthouse.nameAr}
                </h2>
                <div className='flex items-center gap-2 text-lg mb-4'>
                  <span className='font-bold'>{selectedGuesthouse.rating}</span>
                  <div className='flex'>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(selectedGuesthouse.rating)
                            ? 'fill-accent text-accent'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className='text-sm text-muted-foreground'>
                    ({selectedGuesthouse.reviews} {language === 'en' ? 'reviews' : 'تقييمات'})
                  </span>
                </div>
              </div>

              <p className='text-sm text-foreground leading-relaxed'>
                {language === 'en'
                  ? selectedGuesthouse.about
                  : selectedGuesthouse.aboutAr}
              </p>

              <div className='space-y-2 text-sm'>
                <h3 className='font-semibold text-primary'>
                  {language === 'en' ? 'Amenities' : 'المرافق'}
                </h3>
                <div className='grid grid-cols-2 gap-2'>
                  {(language === 'en'
                    ? selectedGuesthouse.amenities
                    : selectedGuesthouse.amenitiesAr
                  ).map((amenity, idx) => (
                    <div key={idx} className='flex items-center gap-2'>
                      <div className='h-2 w-2 rounded-full bg-secondary' />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className='pt-4 border-t border-border space-y-2'>
                <div className='flex items-center gap-2 text-sm'>
                  <Phone className='h-4 w-4 text-secondary' />
                  <span>{selectedGuesthouse.phone}</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <MapPin className='h-4 w-4 text-secondary' />
                  <span>
                    {language === 'en'
                      ? selectedGuesthouse.address
                      : selectedGuesthouse.addressAr}
                  </span>
                </div>
              </div>

              <Button
                className='w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2 mb-2'
                onClick={() => {
                  const query = encodeURIComponent(
                    `${selectedGuesthouse.address} Beni Khaddach Tunisia`
                  );
                  const url = `https://www.google.com/maps/search/${query}/@${selectedGuesthouse.latitude},${selectedGuesthouse.longitude},15z`;
                  window.open(url, '_blank');
                }}
              >
                <MapPin className='h-4 w-4' />
                {language === 'en' ? 'Get Directions' : 'احصل على الاتجاهات'}
              </Button>

              <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground'>
                {language === 'en' ? 'Contact Host' : 'تواصل مع صاحب البيت'}
              </Button>
            </Card>
          ) : (
            <Card className='sticky top-20 p-8 text-center border-2 border-dashed bg-muted/30'>
              <Utensils className='h-12 w-12 text-muted-foreground mx-auto mb-3 opacity-50' />
              <p className='text-muted-foreground font-medium'>
                {language === 'en' ? 'Select a guesthouse' : 'اختر دار ضيافة'}
              </p>
              <p className='text-sm text-muted-foreground mt-1'>
                {language === 'en'
                  ? 'Click on any guesthouse to see details'
                  : 'انقر على أي دار ضيافة لرؤية التفاصيل'}
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
