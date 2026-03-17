export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            ХОРЕО·ЛАБ
          </a>
          <div className="flex space-x-8">
            <a href="#themes" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Темы
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О проекте
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Контакты
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              БАЛЕТ
              <br />
              <span className="text-red-600">МЕЙСТЕР</span>
              <br />
              И ПЕДАГОГ
            </h1>
            <p className="text-xl max-w-xl">
              Образовательный проект о взаимодействии педагога-репетитора и балетмейстера в творческом процессе создания хореографического произведения.
            </p>
            <a
              href="#themes"
              className="inline-block mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-red-600 transition-colors"
            >
              Изучить материалы
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-center justify-center">
            <div className="relative w-full aspect-square bg-red-600 flex items-center justify-center">
              <span className="text-white text-9xl font-bold tracking-tighter select-none">Б</span>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="themes" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-12">ТЕМЫ</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Theme 1 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300">01</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Актуальность исследования</h3>
              <p className="text-neutral-400">Значимость взаимодействия в хореографическом коллективе для создания уникальных произведений искусства</p>
            </div>

            {/* Theme 2 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300">02</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Роли в творческом процессе</h3>
              <p className="text-neutral-400">Функции балетмейстера и педагога-репетитора: разграничение и точки взаимодействия</p>
            </div>

            {/* Theme 3 */}
            <div className="group">
              <div className="aspect-square bg-white mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-neutral-100 group-hover:bg-red-600 transition-colors duration-300">
                  <span className="text-black group-hover:text-white text-8xl font-bold transition-colors duration-300">03</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Создание произведения</h3>
              <p className="text-neutral-400">Этапы совместного творческого процесса: от замысла до воплощения хореографического произведения</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О ПРОЕКТЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <span className="text-8xl font-bold text-neutral-300 select-none z-10">♩</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Образовательный проект посвящён одной из ключевых тем хореографической педагогики — взаимодействию педагога-репетитора и балетмейстера в процессе создания хореографического произведения.
              </p>
              <p className="mb-6">
                Исследование раскрывает, как совместная работа этих двух специалистов определяет художественный результат. Балетмейстер формирует творческий замысел, педагог-репетитор воплощает его через техническую работу с исполнителями.
              </p>
              <p className="mb-6">
                Проект адресован студентам хореографических специальностей, педагогам дополнительного образования, руководителям творческих коллективов и всем, кто интересуется теорией и практикой хореографического искусства.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Принципы</h3>
                  <ul className="space-y-2">
                    <li>Системный подход</li>
                    <li>Практическая основа</li>
                    <li>Научная строгость</li>
                    <li>Доступность изложения</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Разделы</h3>
                  <ul className="space-y-2">
                    <li>Теория взаимодействия</li>
                    <li>Роли и функции</li>
                    <li>Творческий процесс</li>
                    <li>Практические кейсы</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">КОНТАКТЫ</h2>
              <p className="text-xl mb-8">Есть вопросы по проекту или хотите сотрудничать? Напишите нам.</p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Почта</span>
                  <a href="mailto:info@choreolab.ru" className="hover:underline">
                    info@choreolab.ru
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Телефон</span>
                  <a href="tel:+79000000000" className="hover:underline">
                    +7 (900) 000-00-00
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="w-24 text-sm uppercase tracking-widest">Адрес</span>
                  <span>Россия</span>
                </p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm uppercase tracking-widest mb-2">
                    Почта
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваш email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm uppercase tracking-widest mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше сообщение"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="mt-8 px-8 py-3 bg-black text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">2026 ХОРЕО·ЛАБ. Все права защищены.</p>
          <div className="flex space-x-8">
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              ВКонтакте
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Telegram
            </a>
            <a href="#" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}
