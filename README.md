# Beni khadech roots

A comprehensive tourism app for Beni Khaddach (Skhira region, Tunisia) designed to promote alternative tourism and showcase the region's rich cultural heritage.

## Features

### Main Dashboard
- **Interactive Map**: Visual representation of all locations with clickable markers
- **Bilingual Interface**: Full support for English and Arabic
- **Location Filtering**: Browse by category - Archaeological Sites, Artisans, Guesthouses, and Food
- **Audio Guide**: Text-to-speech storytelling for each location in both languages
- **Location Details**: Comprehensive information about each site with images and descriptions

### Key Sections

#### 1. Archaeological Sites
- Qaala Beni Khaddach (Ancient Fortress)
- Medina & Souk (Traditional Market)
- Ancient Water Spring

#### 2. Artisans & Crafts
- Master Pottery Workshop (Haj Ahmed)
- Traditional Weaving (Fatima)
- Showcase of handmade products with pricing and ratings

#### 3. Guesthouses
- Riad Beni Khaddach
- Garden House Retreat
- Heritage House
- Full details including amenities, ratings, and contact information

#### 4. Interactive Features
- **Map-based Navigation**: Click locations to explore
- **Audio Storytelling**: Professional text-to-speech in both languages
- **Real-time Filtering**: Filter locations by type
- **Language Toggle**: Instant switching between English and Arabic
- **Rating System**: Community feedback and ratings for locations

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **Frontend**: React 19.2
- **Styling**: Tailwind CSS v4 with custom theme tokens
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Audio**: Web Speech API for text-to-speech
- **State Management**: React hooks
- **Deployment**: Ready for Vercel

## Color Palette

The app uses an earthy, heritage-focused color scheme:
- **Primary**: #8b6f47 (Warm Brown)
- **Secondary**: #d4a574 (Golden Tan)
- **Accent**: #6b5d4f (Dark Brown)
- **Background**: #f5f1ed (Cream)
- **Foreground**: #2d2520 (Dark)

## Bilingual Support

Full bilingual support (English/Arabic) including:
- UI text and labels
- Location descriptions and stories
- Audio guide narration
- Map legends and controls

## File Structure

```
app/
├── page.tsx                 # Main dashboard
├── layout.tsx              # Root layout with metadata
├── globals.css             # Theme and global styles
├── artisans/
│   └── page.tsx           # Artisans & products showcase
└── guesthouses/
    └── page.tsx           # Guesthouses directory

components/
├── map-view.tsx           # Interactive canvas-based map
├── location-card.tsx      # Location card component
├── navigation.tsx         # Category filter navigation
├── audio-guide.tsx        # Text-to-speech audio guide
└── ui/                    # shadcn/ui components

lib/
└── locations-data.ts      # Location and artisan data
```

## Usage

### Local Development
```bash
npm install
npm run dev
```

Visit `http://localhost:3000`

### Deployment
Ready to deploy on Vercel:
```bash
npm run build
npm run start
```

Or connect your GitHub repository to Vercel for automatic deployments.

## Features Details

### Interactive Map
- Canvas-based implementation for performance
- Click markers to select locations
- Color-coded by location type
- Legend with category indicators
- Responsive and touch-friendly

### Audio Guide
- Uses Web Speech API for text-to-speech
- Supports both English (US) and Arabic (Saudi Arabia)
- Play/pause controls
- Automatic cleanup of audio resources

### Real-time Filtering
- Instant filtering without page reload
- Smooth animations and transitions
- Mobile-responsive filter buttons

### Data Structure
Each location includes:
- Name (English & Arabic)
- Description (English & Arabic)
- Geographic coordinates
- Category/Type
- Image
- Audio story (English & Arabic)
- Address (English & Arabic)
- Contact info
- Ratings (where applicable)

## Future Enhancements

- Weather integration for travel planning
- Event calendar for local festivals
- User reviews and ratings system
- Booking integration for guesthouses
- Offline mode support
- Real Mapbox/Google Maps integration
- Database backend for content management
- Admin panel for content updates

## Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Color contrast ratios meet WCAG standards
- Keyboard navigation support
- Mobile-first responsive design
- Screen reader compatible

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- Currently uses sample/fake data with realistic structure
- Ready to integrate real location data
- Images use placeholder URLs (can be replaced with local assets)
- Text-to-speech quality depends on device/browser capabilities

## License

Created for the Beni Khaddach Youth Hackathon project focused on alternative tourism promotion.
