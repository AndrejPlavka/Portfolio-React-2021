import { contact } from "../../PortfolioData";
// Styles:
// Component:
export const Contact = () => {
  if (!contact.email) return null;

  // Template:
  return (
    <section id="contact">
      <h2>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <button type="button">Email me</button>
      </a>
    </section>
  );
};
// .contact {
//   flex-direction: column;
// }
