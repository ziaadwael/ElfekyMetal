// ✅ قائمة التنقل في الموبايل مع تحسين التنسيق
document.getElementById("menu-btn").addEventListener("click", function () {
  let menu = document.getElementById("menu");
  menu.classList.toggle("hidden");
  menu.classList.toggle("translate-x-full"); // لإضافة تأثير الحركة
});

// ✅ زر الرجوع للأعلى + زر الاتصال الآن
const scrollTopBtn = document.getElementById("scroll-top");
const callNowBtn = document.getElementById("call-now");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.remove("hidden");
    callNowBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
    callNowBtn.classList.add("hidden");
  }
});

scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Gallery Filter

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const galleryItems = document.querySelectorAll(".gallery-item");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // تحديث مظهر الأزرار (إزالة التأثير من جميع الأزرار ثم إضافة التأثير إلى الزر النشط)
      filterButtons.forEach((btn) =>
        btn.classList.remove("bg-blue-600", "text-white")
      );
      this.classList.add("bg-blue-600", "text-white");

      // فلترة العناصر
      galleryItems.forEach((item) => {
        if (category === "all" || item.classList.contains(category)) {
          item.style.display = "block"; // إظهار العنصر
          setTimeout(() => (item.style.opacity = "1"), 100);
        } else {
          item.style.opacity = "0";
          setTimeout(() => (item.style.display = "none"), 300);
        }
      });
    });
  });
});
