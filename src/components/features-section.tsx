import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Носители мифа",
    description: "Пожилые люди и далёкие от техники граждане, конспирологи вроде Марка Стила и псевдоэксперты в соцсетях — все они распространяют страх перед «невидимым излучением».",
    icon: "people",
    badge: "Социология",
  },
  {
    title: "Эмоциональный крючок",
    description: "Миф играет на страхе перед невидимым, недоверии к властям и желании простых объяснений вместо сложной физики радиоволн.",
    icon: "brain",
    badge: "Психология",
  },
  {
    title: "Кому выгодно",
    description: "Продавцы «защитных наклеек от 5G», блогеры-конспирологи и инфоцыгане зарабатывают на панике: чем выше страх — тем выше трафик и продажи.",
    icon: "money",
    badge: "Экономика",
  },
  {
    title: "Физика против мифа",
    description: "Wi-Fi и 5G — неионизирующее излучение с энергией, слишком низкой для повреждения клеток. Вредно только ионизирующее (рентген, гамма-лучи).",
    icon: "zap",
    badge: "Наука",
  },
  {
    title: "Нормы безопасности РФ",
    description: "Российские санитарные нормы для вышек в 10 раз жёстче, чем в США и Европе. Если вышка стоит — она прошла проверку Роспотребнадзора.",
    icon: "lock",
    badge: "Законодательство",
  },
  {
    title: "Кампания «Сигнал и Шум»",
    description: "Серия «разрушителей легенд»: опыты с фольгой, прямые эфиры у вышек с дозиметром и ироничные ролики в стиле 50-х — показываем физику простыми словами.",
    icon: "target",
    badge: "Кампания",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Разбор мифа о 5G и Wi-Fi</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Кто распространяет страх, на чём он держится и как его развенчать — научно и с юмором
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "people" && "👥"}
                    {feature.icon === "brain" && "🧠"}
                    {feature.icon === "money" && "💰"}
                    {feature.icon === "zap" && "⚡"}
                    {feature.icon === "lock" && "🔒"}
                    {feature.icon === "target" && "🎯"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
