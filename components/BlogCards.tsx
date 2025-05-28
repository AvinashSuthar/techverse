import { FocusCards } from "@/components/ui/focus-cards";

export function BlogCards() {
  const cards = [
    {
      title: "Forest Adventure lorem ipsum dolor sit amet consectetur adipiscing elit saf asdf adsfa f df dfd f ",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardId: "1",
      desc: "Explore the serene beauty of the forest with this breathtaking view. The lush greenery and tranquil atmosphere make it a perfect escape from the hustle and bustle of city life.",
    },
    {
      title: "Valley of life",
      src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardId: "2",
      desc: "Explore the serene beauty of the forest with this breathtaking view. The lush greenery and tranquil atmosphere make it a perfect escape from the hustle and bustle of city life.",
    },
    {
      title: "Sala behta hi jayega",
      src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardId: "3",
      desc: "Explore the serene beauty of the forest with this breathtaking view. The lush greenery and tranquil atmosphere make it a perfect escape from the hustle and bustle of city life.",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardId: "4",
      desc: "Explore the serene beauty of the forest with this breathtaking view. The lush greenery and tranquil atmosphere make it a perfect escape from the hustle and bustle of city life.",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      cardId: "5",
      desc: "Explore the serene beauty of the forest with this breathtaking view. The lush greenery and tranquil atmosphere make it a perfect escape from the hustle and bustle of city life.",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
      cardId: "6",
      desc: "Explore the serene beauty of the forest with this breathtaking view. The lush greenery and tranquil atmosphere make it a perfect escape from the hustle and bustle of city life.",
    },
  ];

  return <FocusCards cards={cards} />;
}
