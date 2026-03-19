import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const slides = [
  {
    number: "01",
    tag: "Титульный слайд",
    title: "Антикризисное агентство",
    subtitle: "Миф о вреде интернета (5G, Wi-Fi)",
    content: null,
    quote: "«Радиоволны: бояться нечего, кроме самой боязни»",
    icon: "Radio",
  },
  {
    number: "02",
    tag: "Формулировка мифа",
    title: "Объект работы",
    subtitle: null,
    content: [
      {
        text: "Распространённый стереотип о том, что технологии беспроводной связи (вышки сотовой связи, 5G, Wi-Fi роутеры) оказывают негативное влияние на здоровье человека:",
      },
      { items: ["убивают клетки мозга", "вызывают онкологию", "«зомбируют» людей", "служат оружием массового поражения"] },
    ],
    icon: "AlertTriangle",
  },
  {
    number: "03",
    tag: "Носители мифа",
    title: "Кто распространяет?",
    subtitle: null,
    content: [
      {
        cards: [
          {
            icon: "Users",
            label: "Радиофобы (Laity)",
            text: "Пожилые люди и далёкие от техники граждане, которые испытывают тревогу из-за непонимания принципов работы техники и доверяют слухам больше, чем фактам.",
          },
          {
            icon: "UserX",
            label: "Маргинальные конспирологи",
            text: "Личности вроде Марка Стила, зарабатывающие популярность на страхе. Они называют 5G «оружием», хотя технология создавалась международным сообществом на базе 3G и 4G.",
          },
          {
            icon: "Megaphone",
            label: "Псевдоэксперты в соцсетях",
            text: "Блогеры, продвигающие идеи защиты фольгой от Wi-Fi или продающие «нейтрализаторы излучения», пользуясь неграмотностью аудитории.",
          },
        ],
      },
    ],
    icon: "Users",
  },
  {
    number: "04",
    tag: "Эмоциональная составляющая",
    title: "На каких эмоциях играет миф?",
    subtitle: null,
    content: [
      {
        cards: [
          {
            icon: "Zap",
            label: "Страх и тревога",
            text: "Главный двигатель. Люди боятся того, что не могут увидеть или потрогать («невидимое излучение»), что автоматически делает его «опасным» в обывательском сознании.",
          },
          {
            icon: "ShieldOff",
            label: "Недоверие к властям",
            text: "Миф питается убеждением, что власти и корпорации скрывают «правду» о вышках, хотя строительство станций строго регламентировано Роспотребнадзором.",
          },
          {
            icon: "Brain",
            label: "Желание простых объяснений",
            text: "Идея «всемирного заговора» проще для восприятия, чем сложная физика радиоволн и строгие нормы безопасности (в России они в 10 раз жёстче европейских!).",
          },
        ],
      },
    ],
    icon: "Heart",
  },
  {
    number: "05",
    tag: "Реальные кейсы в СМИ",
    title: "Как СМИ освещали тему",
    subtitle: null,
    content: [
      {
        newsItems: [
          {
            headline: "Фейк: если обернуть роутер фольгой, то качество Интернета улучшится",
            context: "Разоблачение вирусного видео. Эксперты пояснили: фольга блокирует сигнал, а не вредность, делая связь хуже.",
          },
          {
            headline: "5G предназначена для убийства людей? Стопфейк!",
            context: "Проверка заявлений Марка Стила. Журналисты выяснили: он не имеет отношения к разработке стандарта, а его заявления — ложь.",
          },
          {
            headline: "«Заблуждения и мифы о сотовой связи: четыре железных аргумента против радиофобии»",
            context: "Материалы федеральных СМИ на основе данных Роспотребнадзора — научное объяснение разницы между видами излучения.",
          },
        ],
      },
    ],
    icon: "Newspaper",
  },
  {
    number: "06",
    tag: "Кому выгодно?",
    title: "Кто поддерживает панику?",
    subtitle: null,
    content: [
      {
        cards: [
          {
            icon: "ShoppingBag",
            label: "Производители «защиты»",
            text: "Маркетплейсы заполнены товарами: от «защитных наклеек от 5G» до шапочек из фольги. Чем выше паника — тем выше продажи бесполезных товаров.",
          },
          {
            icon: "TrendingUp",
            label: "Инфоцыгане и блогеры",
            text: "Страх генерирует трафик. Громкие «разоблачения мирового заговора» приносят лайки, просмотры и деньги с рекламы.",
          },
          {
            icon: "Briefcase",
            label: "Недобросовестные конкуренты",
            text: "Компании, заинтересованные в торможении развития 5G или продвижении проводных технологий, могут косвенно поддерживать эти настроения.",
          },
        ],
      },
    ],
    icon: "DollarSign",
  },
  {
    number: "07",
    tag: "Научная база",
    title: "Что говорит наука?",
    subtitle: null,
    content: [
      {
        scienceItems: [
          {
            num: "1",
            label: "Физика процесса",
            text: "Wi-Fi и 5G — неионизирующее излучение. Вредно только ионизирующее (рентген, гамма-лучи), которое выбивает электроны из атомов. Радиоволны на это неспособны — слишком низкая энергия.",
          },
          {
            num: "2",
            label: "Законодательство РФ",
            text: "В России действуют самые жёсткие санитарные нормы в мире — в 10 раз строже, чем в США и Европе. Если вышка стоит — она прошла проверку и безопасна.",
          },
          {
            num: "3",
            label: "Научный консенсус",
            text: "Крупнейший европейский проект GOLIAT не находит причинно-следственной связи между работой 5G и заболеваниями. Вышки слишком слабые, чтобы нагреть ткани.",
          },
          {
            num: "4",
            label: "Мозг — не компьютер",
            text: "В мозге нет электрических плат, которые можно «сломать» излучением. Это химический процесс. Зомбирование через вышку невозможно по законам природы.",
          },
        ],
      },
    ],
    icon: "FlaskConical",
  },
  {
    number: "08",
    tag: "Стратегия",
    title: "Кампания «Сигнал и Шум»",
    subtitle: "Science Mode ON",
    content: [
      {
        strategyBlock: {
          idea: "Показать, что страх перед технологиями — это просто эхо прошлого (как боязнь книг, поездов или электричества), а не реальная угроза. Мы не просто говорим «это безопасно» — мы показываем физику процесса простыми словами и через бытовые аналогии.",
          method: "Серия «экспериментальных доказательств» и «разрушителей легенд».",
          analogy: "Как когда-то люди боялись, что поезд «сойдёт с рельс из-за скорости, потому что у лошади так бывает» — так сейчас боятся вышек, путая их с ядерным реактором.",
        },
      },
    ],
    icon: "Lightbulb",
  },
  {
    number: "09",
    tag: "Контент для соцсетей · Формат 1",
    title: "#ДеньИзЖизниФизика",
    subtitle: "Краткий вертикальный ролик",
    content: [
      {
        formatBlock: {
          scenario: "Мы идём в гости к бабушке, которая накрыла роутер фольгой и кастрюлями. Вместе с молодым учёным проводим эксперимент:",
          steps: [
            "Замеряем уровень сигнала с «защитой» — интернет еле дышит",
            "Убираем фольгу — скорость взлетает",
            "Замеряем уровень ЭМИ прибором — он копеечный и в пределах нормы",
          ],
          message: "«Фольга спасает только от вкусного запаха котлет, а не от радиоволн»",
        },
      },
    ],
    icon: "Video",
  },
  {
    number: "10",
    tag: "Контент для соцсетей · Формат 2",
    title: "#СтримСЭкспертом",
    subtitle: "«Вышки у дома: страшилки или физика?»",
    content: [
      {
        formatBlock: {
          scenario: "Инженер стоит на крыше или рядом с вышкой 5G и ведёт прямой эфир:",
          steps: [
            "Объясняет: видимые «коробки» — это лишь антенны, вся мощность — как у лампочки",
            "Отвечает в прямом эфире на самые «глупые» вопросы — про птиц, онкологию, «чипирование»",
            "Показывает дозиметр: фон у вышки ниже, чем у работающего фена или микроволновки дома",
          ],
          message: "Экспертное мнение в режиме реального времени без купюр",
        },
      },
    ],
    icon: "Radio",
  },
  {
    number: "11",
    tag: "Контент для соцсетей · Формат 3",
    title: "#ПропагандаНауки",
    subtitle: "Ироничный ролик в стиле 50-х",
    content: [
      {
        formatBlock: {
          scenario: "Чёрно-белый ролик в эстетике соцреализма. Диктор с пафосным голосом заявляет: «Товарищ! Не позволяй буржуазным конспирологам лишать тебя высокоскоростного интернета!»",
          steps: [
            "Испуганный человек в шапочке из фольги",
            "Бравый инженер связи, протягивающий ему смартфон",
            "Вместо фольги на голове — теперь современная антенна",
          ],
          message: "«Доверяй приборам, а не слухам»",
        },
      },
    ],
    icon: "Film",
  },
  {
    number: "12",
    tag: "Заключение",
    title: "Итог кампании",
    subtitle: null,
    content: [
      {
        conclusionItems: [
          "Мы не высмеиваем людей, а объясняем сложную физику через простые опыты и юмор",
          "Наша цель — снизить уровень «радиофобии», переведя страх из эмоциональной плоскости в рациональную: знание и эксперимент",
          "Единственное, от чего стоит защищаться фольгой — это от спама и фейковых новостей. Технологии безопасны и полезны",
        ],
      },
    ],
    quote: "«Сигнал есть. Шума больше нет.»",
    icon: "CheckCircle",
  },
]

function SlideContent({ content }: { content: typeof slides[0]["content"] }) {
  if (!content) return null

  return (
    <div className="space-y-6">
      {content.map((block, i) => {
        if ("text" in block) {
          return (
            <p key={i} className="text-gray-300 text-base md:text-lg leading-relaxed">
              {block.text}
            </p>
          )
        }
        if ("items" in block && block.items) {
          return (
            <ul key={i} className="space-y-2">
              {block.items.map((item, j) => (
                <li key={j} className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )
        }
        if ("cards" in block && block.cards) {
          return (
            <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {block.cards.map((card, j) => (
                <Card key={j} className="bg-white/5 border-red-500/20">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon name={card.icon} fallback="Circle" size={18} className="text-red-400" />
                      <span className="text-red-400 font-semibold text-sm">{card.label}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )
        }
        if ("newsItems" in block && block.newsItems) {
          return (
            <div key={i} className="space-y-4">
              {block.newsItems.map((item, j) => (
                <div key={j} className="border-l-2 border-red-500 pl-4">
                  <p className="text-white font-semibold mb-1 text-sm md:text-base italic">
                    {item.headline}
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.context}</p>
                </div>
              ))}
            </div>
          )
        }
        if ("scienceItems" in block && block.scienceItems) {
          return (
            <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {block.scienceItems.map((item, j) => (
                <div key={j} className="bg-white/5 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-7 h-7 rounded-full bg-red-500 text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {item.num}
                    </span>
                    <span className="text-red-400 font-semibold text-sm">{item.label}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          )
        }
        if ("strategyBlock" in block && block.strategyBlock) {
          return (
            <div key={i} className="space-y-4">
              <div className="bg-white/5 border border-red-500/20 rounded-lg p-5">
                <p className="text-gray-300 leading-relaxed mb-4">{block.strategyBlock.idea}</p>
                <p className="text-gray-400 text-sm mb-3">
                  <span className="text-red-400 font-semibold">Метод: </span>
                  {block.strategyBlock.method}
                </p>
                <div className="border-l-2 border-red-500 pl-4">
                  <p className="text-gray-400 text-sm italic">
                    <span className="text-white font-semibold">Аналогия: </span>
                    {block.strategyBlock.analogy}
                  </p>
                </div>
              </div>
            </div>
          )
        }
        if ("formatBlock" in block && block.formatBlock) {
          return (
            <div key={i} className="space-y-4">
              <p className="text-gray-300 leading-relaxed">{block.formatBlock.scenario}</p>
              <div className="space-y-2">
                {block.formatBlock.steps.map((step, j) => (
                  <div key={j} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {j + 1}
                    </span>
                    <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <p className="text-red-300 font-semibold text-sm">Посыл: {block.formatBlock.message}</p>
              </div>
            </div>
          )
        }
        if ("conclusionItems" in block && block.conclusionItems) {
          return (
            <div key={i} className="space-y-4">
              {block.conclusionItems.map((item, j) => (
                <div key={j} className="flex items-start gap-3">
                  <Icon name="CheckCircle" size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-300 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          )
        }
        return null
      })}
    </div>
  )
}

export function PresentationSection() {
  const handlePrint = () => {
    window.print()
  }

  return (
    <section className="py-24 bg-black" id="presentation">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-white mb-4">
            Полная презентация
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            Антикризисное агентство — разбор мифа о вреде 5G и Wi-Fi
          </p>
          <Button
            onClick={handlePrint}
            className="bg-red-500 hover:bg-red-600 text-white font-orbitron px-8 py-3 print:hidden"
          >
            <Icon name="Printer" size={18} className="mr-2" />
            Версия для печати / скриншотов
          </Button>
        </div>

        <div className="space-y-8">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative border border-red-500/20 rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-red-500/40 transition-all duration-300"
            >
              {/* Slide number accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-500 to-red-900" />

              <div className="pl-8 pr-6 py-8 md:py-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="font-orbitron text-red-500 text-2xl font-bold">{slide.number}</span>
                  <Badge className="bg-red-500/15 text-red-400 border border-red-500/30 font-mono text-xs">
                    {slide.tag}
                  </Badge>
                  <div className="ml-auto">
                    <Icon name={slide.icon} fallback="Circle" size={20} className="text-red-500/60" />
                  </div>
                </div>

                <h3 className="font-orbitron text-xl md:text-2xl font-bold text-white mb-2">
                  {slide.title}
                </h3>
                {slide.subtitle && (
                  <p className="text-red-400 text-sm md:text-base font-medium mb-6">{slide.subtitle}</p>
                )}
                {!slide.subtitle && slide.content && <div className="mb-6" />}

                {/* Content */}
                <SlideContent content={slide.content} />

                {/* Quote */}
                {slide.quote && (
                  <div className="mt-6 border-t border-red-500/20 pt-6">
                    <p className="text-white font-semibold text-lg md:text-xl italic text-center">
                      {slide.quote}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}