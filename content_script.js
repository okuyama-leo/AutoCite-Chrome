(function() {
  function getMetaContent(attr, value) {
    const element = document.querySelector(`meta[${attr}='${value}']`);
    return element ? element.getAttribute("content") : null;
  }

  function getAuthor() {
    // Try standard author meta tags
    const metaAuthor = getMetaContent("name", "author") || 
                       getMetaContent("property", "article:author") || 
                       getMetaContent("property", "og:site_name");
    
    // If no meta tag, try to find common class names (simple heuristic)
    // This is very site-specific, so keeping it simple is safer.
    return metaAuthor || "Unknown Author";
  }

  function getPublishedYear() {
    const publishedTime = getMetaContent("property", "article:published_time") ||
                          getMetaContent("name", "pubdate");
    
    if (publishedTime) {
      const date = new Date(publishedTime);
      if (!isNaN(date.getFullYear())) {
        return date.getFullYear().toString();
      }
    }
    return "N/A";
  }

  function getFormattedDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}年${month}月${day}日`;
  }

  try {
    const author = getAuthor();
    const year = getPublishedYear();
    const title = document.title || "No Title";
    const url = window.location.href;
    const accessDate = getFormattedDate();

    // 著者名(YYYY).「記事名」<URL>(YYYY年MM月DD日参照).
    // 公開日が不明な場合は，（N/A）と代わりに入力する。
    // Note: If year is "(N/A)", we probably want "Unknown Author((N/A))" or similar?
    // User request: "公開日が不明な場合は，（N/A）と代わりに入力する。" -> implied for YYYY slot.
    
    // Format: Author(Year). 「Title」 <URL> (AccessDate参照).
    const citation = `${author}(${year}). 「${title}」 ${url} (参照：${accessDate})`;

    navigator.clipboard.writeText(citation).then(() => {
      alert(`Citation copied!\n\n${citation}`);
    }).catch(err => {
      console.error('Failed to copy text: ', err);
      alert('Failed to copy citation to clipboard.');
    });

  } catch (e) {
    console.error("AutoCite Error:", e);
    alert("An error occurred while generating the citation.");
  }
})();
