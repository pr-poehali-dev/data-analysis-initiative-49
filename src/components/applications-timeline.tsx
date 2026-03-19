import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Реальные кейсы в СМИ",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Примеры того, как СМИ освещали тему радиофобии: от разоблачения вирусных видео с фольгой до проверки
            заявлений конспирологов о «5G как оружии».
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              «Фейк: фольга улучшает интернет» — эксперты объяснили, что она лишь блокирует сигнал
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              «5G предназначена для убийства людей?» — Стопфейк проверил Марка Стила и опроверг
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Четыре железных аргумента против радиофобии — данные Роспотребнадзора в СМИ
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Научная контраргументация",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Наука однозначно: Wi-Fi и 5G — неионизирующее излучение. Крупнейший европейский проект GOLIAT
            не нашёл причинно-следственной связи между работой сетей и заболеваниями.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Радиоволны не выбивают электроны из атомов — у них слишком низкая энергия
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Нормы РФ в 10 раз жёстче европейских — вышки безопаснее вашего фена
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              Мозг — химический процесс, а не электрическая плата. Зомбирование невозможно физически
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Форматы кампании «Сигнал и Шум»",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Три формата контента: эксперимент у бабушки с фольгой, прямой эфир у вышки с дозиметром
            и ироничный ролик в стиле советской пропаганды 50-х годов.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              #ДеньИзЖизниФизика — замеряем сигнал до и после фольги, показываем результат
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              #СтримСЭкспертом — инженер у вышки отвечает на «глупые» вопросы в прямом эфире
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
              #ПропагандаНауки — чёрно-белый ролик: «Товарищ! Не позволяй лишать тебя интернета!»
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как мы работаем с мифом</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Мы не высмеиваем людей — мы переводим страх из эмоциональной плоскости в рациональную:
            через знание, эксперимент и понятные аналогии.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
