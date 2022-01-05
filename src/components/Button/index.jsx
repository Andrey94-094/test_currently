import './Button.scss';

export default function Button({ className = "", text, onClick, disabled }) {
  return (
    <button className={`button ${className}`} onClick={onClick} disabled={disabled}>{text}</button>
  );
}