'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Footer } from '@/components/footer';
import { ArrowLeft, Star, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const artisanProducts = [
  {
    id: 'pottery-1',
    artisan: {
      name: 'Haj Ahmed',
      nameAr: 'الحاج أحمد',
      category: 'Pottery',
      location: 'Artisans Street, Beni Khaddach',
      locationAr: 'شارع الحرفيين، بني خداش',
      phone: '+216 XX XXX XXX',
      latitude: 36.441,
      longitude: 9.122,
    },
    products: [
      {
        id: 'pot-1',
        name: 'Traditional Water Jug',
        nameAr: 'إبريق الماء التقليدي',
        description: 'Handcrafted ceramic water jug with traditional patterns',
        descriptionAr: 'إبريق فخاري مصنوع يدويًا بأنماط تقليدية',
        image: 'https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=300&h=300&fit=crop',
        price: '45 TND',
        rating: 4.8,
      },
      {
        id: 'pot-2',
        name: 'Decorative Plate',
        nameAr: 'صحن زخرفي',
        description: 'Beautiful blue and white ceramic plate',
        descriptionAr: 'صحن فخاري جميل باللون الأزرق والأبيض',
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=300&fit=crop',
        price: '35 TND',
        rating: 4.6,
      },
      {
        id: 'pot-3',
        name: 'Tagine Pot',
        nameAr: 'طاجين تقليدي',
        description: 'Traditional cone-shaped cooking vessel',
        descriptionAr: 'وعاء طهي على شكل مخروط تقليدي',
        image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=300&h=300&fit=crop',
        price: '55 TND',
        rating: 4.9,
      },
    ],
  },
  {
    id: 'weaving-1',
    artisan: {
      name: 'Fatima',
      nameAr: 'فاطمة',
      category: 'Textiles',
      location: 'Artisan Alley, Beni Khaddach',
      locationAr: 'زقاق الحرفيات، بني خداش',
      phone: '+216 XX XXX XXX',
      latitude: 36.443,
      longitude: 9.124,
    },
    products: [
      {
        id: 'textile-1',
        name: 'Traditional Wall Hanging',
        nameAr: 'قطعة جدار تقليدية',
        description: 'Hand-woven tapestry with geometric patterns',
        descriptionAr: 'نسيج مصنوع يدويًا بأنماط هندسية',
        image: 'https://images.unsplash.com/photo-1535536411265-47f5d561e7a4?w=300&h=300&fit=crop',
        price: '85 TND',
        rating: 4.7,
      },
      {
        id: 'textile-2',
        name: 'Table Runner',
        nameAr: 'عداء الطاولة',
        description: 'Colorful woven table decoration',
        descriptionAr: 'زخرفة طاولة منسوجة ملونة',
        image: 'https://images.unsplash.com/photo-1535536411265-47f5d561e7a4?w=300&h=300&fit=crop',
        price: '65 TND',
        rating: 4.8,
      },
      {
        id: 'textile-3',
        name: 'Cushion Cover',
        nameAr: 'غطاء وسادة',
        description: 'Beautifully woven cushion cover with traditional motifs',
        descriptionAr: 'غطاء وسادة منسوج بجمال بزخارف تقليدية',
        image: 'https://images.unsplash.com/photo-1535536411265-47f5d561e7a4?w=300&h=300&fit=crop',
        price: '45 TND',
        rating: 4.9,
      },
    ],
  },
];

interface Product {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  price: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  language: 'en' | 'ar';
}

function ProductCard({ product, language }: ProductCardProps) {
  return (
    <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
      <div className='relative w-full h-48 bg-muted overflow-hidden'>
        <img
          src={product.image || "/placeholder.svg"}
          alt={language === 'en' ? product.name : product.nameAr}
          className='w-full h-full object-cover hover:scale-110 transition-transform duration-300'
        />
      </div>

      <div className='p-4 space-y-3'>
        <div>
          <h3 className='font-bold text-primary'>
            {language === 'en' ? product.name : product.nameAr}
          </h3>
          <p className='text-sm text-muted-foreground line-clamp-2'>
            {language === 'en' ? product.description : product.descriptionAr}
          </p>
        </div>

        <div className='flex items-center justify-between pt-2 border-t border-border'>
          <span className='font-bold text-secondary'>{product.price}</span>
          <div className='flex items-center gap-1'>
            <Star className='h-4 w-4 fill-accent text-accent' />
            <span className='text-sm font-medium'>{product.rating}</span>
          </div>
        </div>

        <Button className='w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm'>
          {language === 'en' ? 'View Details' : 'عرض التفاصيل'}
        </Button>
      </div>
    </Card>
  );
}

export default function ArtisansPage() {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

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
                {language === 'en' ? 'Artisans & Crafts' : 'الحرفيون والحرف اليدوية'}
              </h1>
              <p className='text-sm text-muted-foreground'>
                {language === 'en'
                  ? 'Discover authentic handmade products'
                  : 'اكتشف المنتجات اليدوية الأصيلة'}
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
      <div className='container mx-auto px-4 py-8'>
        {artisanProducts.map((artisanGroup) => (
          <div key={artisanGroup.id} className='mb-12'>
            {/* Artisan Header with Location */}
            <div className='mb-6 pb-4 border-b-2 border-border'>
              <h2 className='text-2xl font-bold text-primary mb-2'>
                {language === 'en' ? artisanGroup.artisan.name : artisanGroup.artisan.nameAr}
              </h2>
              <div className='flex flex-col sm:flex-row gap-3 items-start sm:items-center mb-3'>
                <Badge className='bg-secondary text-secondary-foreground'>
                  {artisanGroup.artisan.category}
                </Badge>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <MapPin className='h-4 w-4' />
                  <span>
                    {language === 'en'
                      ? artisanGroup.artisan.location
                      : artisanGroup.artisan.locationAr}
                  </span>
                </div>
                <div className='flex items-center gap-2 text-sm text-muted-foreground'>
                  <Phone className='h-4 w-4' />
                  <a href={`tel:${artisanGroup.artisan.phone}`} className='hover:text-primary'>
                    {artisanGroup.artisan.phone}
                  </a>
                </div>
              </div>
              <Button
                size='sm'
                variant='outline'
                className='gap-2'
                onClick={() => {
                  const query = encodeURIComponent(
                    `${artisanGroup.artisan.location} Beni Khaddach Tunisia`
                  );
                  const url = `https://www.google.com/maps/search/${query}/@${artisanGroup.artisan.latitude},${artisanGroup.artisan.longitude},15z`;
                  window.open(url, '_blank');
                }}
              >
                <MapPin className='h-4 w-4' />
                {language === 'en' ? 'Get Directions' : 'احصل على الاتجاهات'}
              </Button>
            </div>

            {/* Products Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {artisanGroup.products.map((product) => (
                <ProductCard key={product.id} product={product} language={language} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <Footer language={language} />
    </div>
  );
}
