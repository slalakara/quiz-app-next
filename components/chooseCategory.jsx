import konular from "@/app/data/konular.json"
import Link from "next/link";
import data from "@/app/data/data.json"
import Image from "next/image";
import HTML from "@/app/img/HTML.png"
import CSS from "@/app/img/CSS.png"
import JS from "@/app/img/JS.png"
import Acs from "@/app/img/Acs.png"

export default function QuizSelector() {

  return(
    <div className="quiz-selector">
      <div className="Startcontainer">
        <div className="StartHeader">
          <h4>Welcome to the <br /><h5>Frontend Quiz!</h5></h4>
          <p>Pick a subject to get started.</p>
        </div>
        <div className="categories">
          {konular.map(x => (
            <button className="categoryItem" key={x.id}>
              <span className="category-icon">
                <Link href="/HTML">{x.konu === 'HTML' && <Image style={{backgroundColor: '#FFF1E9'}} src={HTML} width={40} height={40} alt="HTML Icon" />}</Link>
                <Link href="/CSS">{x.konu === 'CSS' && <Image style={{backgroundColor: '#E0FDEF'}} src={CSS} width={40} height={40} alt="CSS Icon" />}</Link>
                <Link href="/JS">{x.konu === 'JS' && <Image style={{backgroundColor: '#EBF0FF'}} src={JS} width={40} height={40} alt="JS Icon" />}</Link>
                <Link href="/Accessibility">{x.konu === 'Accessibility' && <Image style={{backgroundColor: '#F6E7FF'}} width={40} height={40} src={Acs} alt="Accessibility Icon" />}</Link>
              </span>
              <h3>{x.konu}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}