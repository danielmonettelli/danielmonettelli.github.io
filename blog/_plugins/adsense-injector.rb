# Plugin to inject optimized Google AdSense script into all HTML pages after rendering
Jekyll::Hooks.register :site, :post_write do |site|
  # Solo ejecutar en modo desarrollo
  next unless Jekyll.env == 'development'
  
  puts "🔧 Optimizing AdSense for local development..."
  
  # Script AdSense optimizado para desarrollo
  optimized_script = <<~SCRIPT
    <!-- AdSense Development Optimized -->
    <script>
    (function() {
      if (window.adsenseDevOptimized) return;
      window.adsenseDevOptimized = true;
      
      console.log('🛠️ Loading AdSense for development...');
      
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7596549899792751';
      script.crossOrigin = 'anonymous';
      
      script.onload = function() {
        try {
          (adsbygoogle = window.adsbygoogle || []).push({
            google_ad_client: "ca-pub-7596549899792751",
            enable_page_level_ads: true,
            overlays: {bottom: true}
          });
          console.log('💰 Development AdSense ready!');
        } catch(e) {
          console.log('AdSense auto-init attempted');
        }
      };
      
      script.onerror = function() {
        console.warn('⚠️ AdSense failed in development mode');
      };
      
      document.head.appendChild(script);
    })();
    </script>
  SCRIPT

  # Preload optimizations
  preload_opts = <<~PRELOAD
    <link rel="preload" href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" as="script">
    <link rel="dns-prefetch" href="//pagead2.googlesyndication.com">
  PRELOAD
  
  processed = 0
  html_files = Dir.glob(File.join(site.dest, "**", "*.html"))
  
  html_files.each do |file_path|
    content = File.read(file_path)
    
    # Solo procesar si no tiene AdSense ya
    next if content.include?('ca-pub-7596549899792751')
    
    if content.include?('</head>')
      content = content.gsub('</head>', "#{preload_opts}#{optimized_script}\n</head>")
      File.write(file_path, content)
      processed += 1
    end
  end
  
  puts "✅ Optimized #{processed} files for development"
end
