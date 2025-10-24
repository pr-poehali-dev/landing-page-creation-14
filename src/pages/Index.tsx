import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      role: "Танцовщица",
      text: "Потрясающая атмосфера для творчества! Занятия танцами здесь изменили мою жизнь. Преподаватели - настоящие профессионалы!",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/942db71f-21a8-4fdb-bdac-f4aca78cf24b.jpg"
    },
    {
      name: "Михаил Соколов",
      role: "Музыкант",
      text: "Нашел здесь единомышленников и вдохновение. Студия оборудована всем необходимым, а энергетика просто невероятная!",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/3a8ca910-28d3-494e-afa7-92218f48ed44.jpg"
    },
    {
      name: "Елена Иванова",
      role: "Актриса",
      text: "Мастер-классы по актерскому мастерству превзошли все ожидания. Раскрыла свой потенциал в полной мере!",
      rating: 5,
      image: "https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/942db71f-21a8-4fdb-bdac-f4aca78cf24b.jpg"
    }
  ];

  const features = [
    {
      icon: "Music",
      title: "Танцы и музыка",
      description: "Современные танцевальные направления и музыкальные занятия"
    },
    {
      icon: "Film",
      title: "Кино и актерство",
      description: "Актерское мастерство, режиссура и киноискусство"
    },
    {
      icon: "Mic",
      title: "Ораторское мастерство",
      description: "Развитие навыков публичных выступлений и коммуникации"
    },
    {
      icon: "Sparkles",
      title: "Духовное развитие",
      description: "Практики медитации, йоги и личностного роста"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-orange-50 to-gold/10">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-gold flex items-center justify-center">
              <Icon name="Sparkles" className="text-white" size={24} />
            </div>
            <span className="font-display text-xl md:text-2xl font-bold bg-gradient-to-r from-orange to-gold bg-clip-text text-transparent">
              ArtSpace Сочи
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm hover:text-orange transition-colors">Главная</a>
            <a href="#reviews" className="text-sm hover:text-orange transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm hover:text-orange transition-colors">Контакты</a>
            <Button className="bg-gradient-to-r from-orange to-orange-light text-white">
              Забронировать
            </Button>
          </div>
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-orange" />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-[73px] left-0 right-0 bg-white/95 backdrop-blur-md z-40 border-b border-border md:hidden animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            <a 
              href="#home" 
              className="text-base hover:text-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Главная
            </a>
            <a 
              href="#reviews" 
              className="text-base hover:text-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Отзывы
            </a>
            <a 
              href="#contacts" 
              className="text-base hover:text-orange transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Контакты
            </a>
            <Button 
              className="bg-gradient-to-r from-orange to-orange-light text-white w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Забронировать
            </Button>
          </div>
        </div>
      )}

      <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-medium">
                  ✨ Творческое пространство
                </span>
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Пространство
                <br />
                <span className="bg-gradient-to-r from-orange via-orange-light to-gold bg-clip-text text-transparent">
                  для творчества
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Танцы, музыка, кино, актерское и ораторское мастерство, духовное развитие. 
                Откройте свой талант в сердце Сочи.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl transition-all">
                  Забронировать место
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange text-orange hover:bg-orange hover:text-white">
                  Расписание
                </Button>
              </div>
              <div className="flex items-center gap-4 sm:gap-8 pt-8 overflow-x-auto">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-orange whitespace-nowrap">1200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Участников</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-orange whitespace-nowrap">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Мероприятий</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-orange whitespace-nowrap">5</div>
                  <div className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Направлений</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-gold/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/a8ab8840-9005-4973-8d02-ada3c440d9fd/files/869615ba-314c-42a6-b255-1bf19f1a9408.jpg"
                alt="Creative Space"
                className="relative rounded-3xl shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white/50">
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

      <section id="reviews" className="py-12 sm:py-20 px-4 sm:px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <span className="px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium">
              ⭐ Отзывы
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-6 mb-4">
              Что говорят наши
              <br />
              <span className="bg-gradient-to-r from-orange to-gold bg-clip-text text-transparent">
                участники
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Истории людей, которые раскрыли свой творческий потенциал в ArtSpace
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

      <section id="contacts" className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-accent to-blue-dark text-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                📬 Свяжитесь с нами
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-6 mb-6">
                Присоединяйтесь
                <br />
                к творческому сообществу
              </h2>
              <p className="text-lg sm:text-xl text-white/80 mb-8">
                Оставьте заявку на участие в мероприятиях или аренду пространства
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-white/70">info@artspace-sochi.ru</div>
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
                    <div className="text-white/70">Сочи, Курортный проспект, 75</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white animate-scale-in">
              <h3 className="font-display text-2xl font-bold mb-6 text-foreground">
                Запись на мероприятие
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
                    placeholder="Какое направление вас интересует: танцы, музыка, кино, актерство или духовное развитие?"
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

      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-accent text-white/70">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange to-gold flex items-center justify-center">
                <Icon name="Sparkles" className="text-white" size={24} />
              </div>
              <span className="font-display text-xl font-bold text-white">ArtSpace Сочи</span>
            </div>
            <div className="text-center md:text-left">
              <p>© 2024 ArtSpace Сочи. Все права защищены.</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;