import Header from "../../components/header";
import Footer from "../../components/footer";
import Spacing from "../../components/spacing";

const DRETD: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-black-100">
      <Header />
      <Spacing size={3}/>
      <main className="container mx-auto flex-grow p-">

      </main>
      <Footer />
    </div>
  );
};

export default DRETD;