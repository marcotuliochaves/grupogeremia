import './WhatsAppButton.css';

export default function WhatsAppButton() {
  const whatsappNumber = "553433121515";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="whatsapp-button-container">
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button-link"
      >
        <img
          src="/mascote-gere-wpp.png"
          alt="Fale conosco no WhatsApp"
          width={64}
          height={64}
          className="whatsapp-button-img"
        />
      </a>
    </div>
  );
}