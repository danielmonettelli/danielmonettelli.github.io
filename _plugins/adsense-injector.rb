# Plugin to inject Google AdSense script into all HTML pages after rendering
Jekyll::Hooks.register :site, :post_write do |site|
  # Find all HTML files in the _site directory
  html_files = Dir.glob(File.join(site.dest, "**", "*.html"))
  
  adsense_script = %Q{
<!-- Google AdSense Auto Ads -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7596549899792751" crossorigin="anonymous"></script>}
  
  html_files.each do |file_path|
    content = File.read(file_path)
    
    # Only inject if not already present and if </head> exists
    if content.include?("</head>") && !content.include?("pagead2.googlesyndication")
      content = content.gsub("</head>", "#{adsense_script}\n</head>")
      File.write(file_path, content)
      puts "AdSense injected into: #{file_path}"
    end
  end
end
