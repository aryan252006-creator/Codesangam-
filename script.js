document.getElementById("year").textContent = new Date().getFullYear();
lucide.createIcons();

const works = [
  {
    id: 1,
    title: "Painting",
    type: "Art",
    url: "https://media.gettyimages.com/id/1409046342/vector/sunset-on-the-river-oil-painting.jpg?s=612x612&w=0&k=20&c=z5bUaK2va7AjybzWlWfl3Y7tlTthmdJZ2VtwpE0pYwM="
  },
  {
    id: 2,
    title: "Street Photography",
    type: "Photography",
    url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Short Story",
    type: "Writing",
    url: "https://media.gettyimages.com/id/172856295/photo/short-story.jpg?s=612x612&w=0&k=20&c=L6uBMGKZ4OlzJrgjnRr3AplSY5GkIptgxs_TTIQS7p0="
  },
  {
    id: 4,
    title: "Hip-Hop Dance Performance",
    type: "Dance",
    url: "https://media.gettyimages.com/id/492451430/photo/unrecognizable-hip-hop-male-dancer-with-hoodie-jumping.jpg?s=612x612&w=0&k=20&c=KownFL1Ta74IOroN12gAH_TpQq9O6BpEjgR6qBiabjg="
  },
 { id: 5, title: "Stage Acting Scene", type: "Acting", url: "https://media.gettyimages.com/id/161936213/photo/three-male-mimes-on-the-stage.jpg?s=612x612&w=0&k=20&c=JTXd57UV-LIPUZt6BQcdIDFV3SarZq97Rra5svbn2fk=" },
  {
    id: 6,
    title: "Classical Singing",
    type: "Singing",
    url: "https://cdn.pixabay.com/photo/2020/07/23/11/58/man-5431169_1280.jpg"
  },
  {
    id: 7,
    title: "Digital Sketch",
    type: "Art",
    url: "https://media.gettyimages.com/id/638493340/photo/creating-eye-catching-designs.jpg?s=612x612&w=0&k=20&c=biR-llcR8Cl70ij_rx1yP_75hdqK4icYB8I6GaE8GM0="
  },
  {
    id: 8,
    title: "Nature Photography",
    type: "Photography",
    url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Poetry Recital",
    type: "Writing",
    url: "https://media.gettyimages.com/id/2200220847/photo/a-woman-sitting-in-the-forest-and-journaling-in-her-book.jpg?s=612x612&w=0&k=20&c=kBN0Iky0KA08dwbB-AapuP-RqZQP_ZjPh8WDk4ugTUs="
  },
  {
    id: 10,
    title: "Stand-up",
    type: "Comedy",
    url: "https://media.gettyimages.com/id/1480016090/photo/male-stand-up-comedian-talking-on-stage.jpg?s=612x612&w=0&k=20&c=rUdHkwdhItjqNCaaeRROVqhDLUfb4AxU9gGZEpabK4E="
  },
];



const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");

// Function to render gallery cards
function renderGallery(filteredWorks) {
  gallery.innerHTML = "";
  filteredWorks.forEach((work) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${work.url}" alt="${work.title}">
      <div class="card-content">
        <h3>${work.title}</h3>
        <p>Type: ${work.type}</p>
        <button class="bookmark-btn"><i data-lucide="star"></i> Bookmark</button>
      </div>
    `;
    gallery.appendChild(card);
  });

  lucide.createIcons();

  // ⭐ Make bookmark buttons interactive
  const bookmarkButtons = document.querySelectorAll(".bookmark-btn");
  bookmarkButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle active class for color change
      btn.classList.toggle("active");

      // Optional: Change icon color directly for extra effect
      const icon = btn.querySelector("svg");
      if (btn.classList.contains("active")) {
        icon.style.fill = "gold";       // filled gold star
        icon.style.color = "gold";
        btn.style.background = "#4b0082"; // darker purple
        btn.textContent = " Bookmarked";
        btn.prepend(icon);
      } else {
        icon.style.fill = "none";       // hollow star
        icon.style.color = "white";
        btn.style.background = "#6a0dad"; // back to normal
        btn.textContent = " Bookmark";
        btn.prepend(icon);
      }
    });
  });
}

renderGallery(works);

// 🔍 Search Filter
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = works.filter(
    (w) =>
      w.title.toLowerCase().includes(query) ||
      w.type.toLowerCase().includes(query)
  );
  renderGallery(filtered);
});