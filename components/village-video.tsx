'use client';

export function VillageVideo() {
  return (
    <section className="w-full py-8">
  
      {/* <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
        <video
          src="/vd.mp4"
          controls
          className="w-full h-full object-cover"
        >
        </video>
      </div> */}
       <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-border">
        {/* <video
          src="/vd.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        /> */}
      </div>
      {/* <iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/VIDEO_ID" 
  frameborder="0" 
  allowfullscreen>
</iframe> */}
    </section>
  );
}