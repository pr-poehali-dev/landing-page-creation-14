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
    <div className="min-h-screen bg-gradient-to-br from-background via-orange-50 to-gold/10 overflow-x-hidden w-full max-w-[100vw]">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-border">
        <div className="mx-auto px-3 sm:px-6 py-2 sm:py-3 flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <img 
              src="https://cdn.poehali.dev/files/56e896fd-1f8f-41ad-b751-189da9a5711a.png" 
              alt="Cinematique Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-display text-xl sm:text-4xl md:text-5xl font-bold text-[#FF6B35] whitespace-nowrap">
              Cinematique
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
            className="md:hidden p-1 sm:p-2 flex-shrink-0"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={24} className="text-orange" />
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-[57px] sm:top-[73px] left-0 right-0 bg-white/95 backdrop-blur-md z-40 border-b border-border md:hidden animate-fade-in shadow-lg">
          <div className="px-3 sm:px-6 py-4 sm:py-6 flex flex-col gap-3 sm:gap-4">
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

      <section id="home" className="pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-12 md:pb-20 px-3 sm:px-6">
        <div className="mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in">

              <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Пространство
                <br />
                <span className="bg-gradient-to-r from-orange via-orange-light to-gold bg-clip-text text-transparent">
                  для творчества
                </span>
              </h1>
              <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Танцы, музыка, кино, актерское и ораторское мастерство. 
                Откройте свой талант в сердце Сочи.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                <Button size="lg" className="bg-gradient-to-r from-orange to-orange-light text-white hover:shadow-xl transition-all w-full sm:w-auto text-sm sm:text-base">
                  Забронировать место
                  <Icon name="ArrowRight" className="ml-2" size={18} />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange text-orange hover:bg-orange hover:text-white w-full sm:w-auto text-sm sm:text-base">
                  Расписание
                </Button>
              </div>
              <div className="flex items-center gap-2 sm:gap-6 lg:gap-8 pt-6 sm:pt-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-orange">1200+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Участников</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-orange">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Мероприятий</div>
                </div>
                <div className="w-px h-12 bg-border"></div>
                <div className="text-center">
                  <div className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-orange">5</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">Направлений</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-orange/20 to-gold/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/12575b84-76cd-46aa-9479-9c933be143d2.jpeg"
                alt="Cinematique Space"
                className="relative rounded-3xl shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 px-3 sm:px-6 bg-white/50">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-orange/20 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange to-gold flex items-center justify-center mb-4">
                  <Icon name={feature.icon as any} className="text-white" size={28} />
                </div>
                <h3 className="font-display text-base sm:text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-12 sm:py-20 px-3 sm:px-6">
        <div className="mx-auto w-full">
          <div className="text-center mb-10 sm:mb-16 animate-fade-in">
            <span className="px-4 py-2 bg-gold/20 text-gold rounded-full text-sm font-medium">
              ⭐ Отзывы
            </span>
            <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-4">
              Что говорят наши
              <br />
              <span className="bg-gradient-to-r from-orange to-gold bg-clip-text text-transparent">
                участники
              </span>
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
              Истории людей, которые раскрыли свой творческий потенциал в ArtSpace
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-4 sm:p-8 hover:shadow-2xl transition-all duration-300 border-2 border-blue/10 hover:border-orange/30 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-orange flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-sm sm:text-lg truncate">{testimonial.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" className="text-gold fill-gold" size={16} />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-12 sm:py-20 px-3 sm:px-6 bg-gradient-to-br from-accent to-blue-dark text-white">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="animate-fade-in">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                📬 Свяжитесь с нами
              </span>
              <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-6 mb-6">
                Присоединяйтесь
                <br />
                к творческому сообществу
              </h2>
              <p className="text-sm sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8">
                Оставьте заявку на участие в мероприятиях или аренду пространства
              </p>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base">Email</div>
                    <div className="text-white/70 text-xs sm:text-sm break-all">info@artspace-sochi.ru</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base">Телефон</div>
                    <div className="text-white/70 text-xs sm:text-sm">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-semibold text-sm sm:text-base">Адрес</div>
                    <div className="text-white/70 text-xs sm:text-sm">Сочи, Курортный проспект, 75</div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-6 sm:p-8 bg-white animate-scale-in">
              <h3 className="font-display text-lg sm:text-2xl font-bold mb-4 sm:mb-6 text-foreground">
                Запись на мероприятие
              </h3>
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
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
                    placeholder="Какое направление вас интересует?"
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

      <footer className="py-8 sm:py-12 px-3 sm:px-6 bg-accent text-white/70">
        <div className="mx-auto w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.poehali.dev/files/56e896fd-1f8f-41ad-b751-189da9a5711a.png" 
                alt="Cinematique Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="font-display text-sm sm:text-xl font-bold text-white whitespace-nowrap">Cinematique</span>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs sm:text-sm">© 2024 Cinematique. Все права защищены.</p>
            </div>
            <div className="flex gap-3 sm:gap-4 flex-shrink-0">
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