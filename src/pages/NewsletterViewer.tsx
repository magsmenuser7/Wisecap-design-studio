import { useParams } from "react-router-dom";
import { newsletters } from "../data/newsletters";
import { useEffect } from "react";

const NewsletterViewer = () => {
  const { slug } = useParams();

  // 🔍 Find newsletter by slug
  const newsletter = newsletters.find((n) => n.slug === slug);

  // Debug
  console.log("URL slug:", slug);
  console.log(
    "Available newsletters:",
    newsletters.map((n) => n.slug)
  );

  // 🔁 Scroll to top when slug changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // ❌ Not found
  if (!newsletter) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black text-xl">
        Page not found
      </div>
    );
  }

  // ✅ Encode PDF URL
  const pdfUrl = encodeURI(newsletter.pdf);

  // ✅ Detect iOS
  const isIOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  // ✅ iOS fallback → open PDF directly
  useEffect(() => {
    if (isIOS) {
      window.location.replace(pdfUrl);
    }
  }, [isIOS, pdfUrl]);

  // ✅ Prevent blank screen during redirect
  if (isIOS) {
    return (
      <div className="min-h-screen flex items-center justify-center text-black text-lg">
        Opening PDF...
      </div>
    );
  }

  // ✅ Desktop + Android iframe
  return (
    <div className="min-h-screen">
      <iframe
        key={slug}
        src={pdfUrl}
        title={newsletter.title}
        className="w-full h-screen border-0"
      />
    </div>
  );
};

export default NewsletterViewer;