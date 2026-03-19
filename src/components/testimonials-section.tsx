import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Елена Соколова",
    role: "Инженер связи, МТС",
    avatar: "/professional-woman-scientist.png",
    content:
      "Наконец-то кто-то объясняет это нормальным языком. Я устала отвечать соседям на вопросы про «5G-чипирование» — теперь просто отправляю ссылку на эту кампанию.",
  },
  {
    name: "Алексей Громов",
    role: "Преподаватель физики, МГУ",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Аналогия со страхом перед поездами — блестяще. Именно так и работает исторический страх перед новым. Буду использовать в лекциях.",
  },
  {
    name: "Мария Иванова",
    role: "Редактор, Стопфейк Россия",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Формат «#ДеньИзЖизниФизика» — это именно то, чего не хватало. Люди верят эксперименту, а не лекции. Видео с фольгой разошлось моментально.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Нас поддерживают эксперты</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят специалисты о нашем подходе к развенчанию радиофобии
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
