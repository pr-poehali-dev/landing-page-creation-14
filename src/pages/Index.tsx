import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Маркетолог",
      text: "Прошла курс по digital-маркетингу. Все структурировано и понятно, применяю знания на практике каждый день!",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/94a7f645-e1c0-4ca3-a04b-28360d7200ad.jpg"
    },
    {
      name: "Михаил Соколов",
      role: "Разработчик",
      text: "Тренинг по управлению проектами изменил мой подход к работе. Рекомендую всем, кто хочет расти профессионально!",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/94a7f645-e1c0-4ca3-a04b-28360d7200ad.jpg"
    },
    {
      name: "Елена Иванова",
      role: "HR-менеджер",
      text: "Образовательная программа превзошла ожидания! Преподаватели - практики с реальным опытом.",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/94a7f645-e1c0-4ca3-a04b-28360d7200ad.jpg"
    }
  ];

  const features = [
    {
      icon: "Lightbulb",
      title: "Креативный подход",
      description: "Нестандартные методики обучения для максимального усвоения материала"
    },
    {
      icon: "Users",
      title: "Опытные наставники",
      description: "Преподаватели-практики с реальным опытом работы в индустрии"
    },
    {
      icon: "Award",
      title: "Сертификаты",
      description: "Документы государственного образца после завершения программы"
    },
    {
      icon: "Clock",
      title: "Гибкий график",
      description: "Учитесь в удобное время, совмещая обучение с работой"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-orange-50 to-gold/10">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-gold flex items-center justify-center">
              <Icon name="GraduationCap" className="text-white" size={24} />
            </div>
            <span className="font-display text-2xl font-bold bg-gradient-to-r from-orange to-gold bg-clip-text text-transparent">
              EduSpace
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-orange transition-colors">Главная</a>
            <a href="#reviews" className="text-sm hover:text-orange transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm hover:text-orange transition-colors">Контакты</a>
            <Button className="bg-gradient-to-r from-orange to-orange-light text-white">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-medium">
                  🚀 Инновационное образование
                </span>
              </div>
              <h1 className="font-display text-6xl lg:text-7xl font-bold leading-tight">
                Образование
                <br />
                <span className="bg-gradient-to-r from-orange via-orange-light to-gold bg-clip-text text-transparent">
                  нового уровня
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Онлайн-курсы и тренинги от практикующих экспертов. 
                Получите востребованные навыки и измените свою карьеру.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl transition-all">
                  Выбрать курс
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange text-orange hover:bg-orange hover:text-white">
                  Узнать больше
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-8">
                <div>
                  <div className="font-display text-4xl font-bold text-orange">2500+</div>
                  <div className="text-sm text-muted-foreground">Выпускников</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="font-display text-4xl font-bold text-orange">150+</div>
                  <div className="text-sm text-muted-foreground">Курсов</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="font-display text-4xl font-bold text-orange">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-gold/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/0bf4d133-b2ce-47ff-b19b-6b99bf943562.jpg"
                alt="Education"
                className="relative rounded-3xl shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-gold flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium">
              ⭐ Отзывы
            </span>
            <h2 className="font-display text-5xl font-bold mt-6 mb-4">
              Что говорят наши
              <br />
              <span className="bg-gradient-to-r from-orange to-gold bg-clip-text text-transparent">
                выпускники
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Реальные истории успеха людей, которые изменили свою жизнь благодаря нашим программам
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 hover:shadow-2xl transition-all duration-300 border-2 border-blue/10 hover:border-orange/30 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-orange"
                  />
                  <div>
                    <h4 className="font-bold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-gold fill-gold" size={16} />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-6 bg-gradient-to-br from-accent to-blue-dark text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                📬 Свяжитесь с нами
              </span>
              <h2 className="font-display text-5xl font-bold mt-6 mb-6">
                Начните обучение
                <br />
                уже сегодня
              </h2>
              <p className="text-xl text-white/80 mb-8">
                Оставьте заявку, и наш менеджер свяжется с вами для консультации
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/70">info@eduspace.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Телефон</div>
                    <div className="text-white/70">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="MapPin" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Адрес</div>
                    <div className="text-white/70">Москва, ул. Примерная, 123</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white animate-scale-in">
              <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                Форма заявки
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Ваше имя</label>
                  <Input 
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="border-2 focus:border-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
                  <Input 
                    type="email"
                    placeholder="ivan@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="border-2 focus:border-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                    className="border-2 focus:border-orange"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите, какой курс вас интересует..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="border-2 focus:border-orange resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl"
                  size="lg"
                >
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-accent text-white/70">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-gold flex items-center justify-center">
                <Icon name="GraduationCap" className="text-white" size={24} />
              </div>
              <span className="font-display text-xl font-bold text-white">EduSpace</span>
            </div>
            <div className="text-center md:text-left">
              <p>© 2024 EduSpace. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
