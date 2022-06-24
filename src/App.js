import './App.css';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';
import Header from './components/Header';
import Contact from './components/Contact';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
    return (
        <div className="App">
            <Header />
            {contacts.map(contact => {
                return <Contact nama={contact.name} nomor={contact.phone} email={contact.email} photo={contact.photo} />
            })
            }
        </div>
    );
}

export default App;
