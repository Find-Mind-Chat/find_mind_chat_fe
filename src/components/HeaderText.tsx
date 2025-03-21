import '../styles/HeaderText.css';

const HeaderText = ({ title }: { title: string }) => {
  return (
    <div className="header">
      <p className="title">{title}</p>
    </div>
  );
};
export default HeaderText;
