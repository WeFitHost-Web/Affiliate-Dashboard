
import { AdminUtilsProvider } from "./context/admin-utils-context";
import Sidebar from "./components/sidebar/sidebar"
import Header from "./components/header";
import Overlay from './components/overlay'
export default function RootLayout({ children }) {
  return (
    <main >
       <AdminUtilsProvider>
      <div
        className={` antialiased  h-screen overflow-hidden  flex items-start  bg-white`}
        id="admin-body"
      >
       
        <Sidebar hidden />
       <Overlay/>
        <section className="h-full overflow-auto  w-full  flex flex-col gap-4 bg-light">
          <Header/>
          {children}
        </section>
      </div>
      </AdminUtilsProvider>
    </main>
  );
}
