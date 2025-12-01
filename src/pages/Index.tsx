import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-light tracking-tight text-foreground">
            Название события
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl mx-auto">
            Краткое описание вебинара, конференции или марафона
          </p>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-muted-foreground" />
        </div>
      </section>

      <section className="py-32 px-6 bg-gradient-to-b from-white to-muted/20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16 animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                О событии
              </h2>
              <div className="h-px bg-border w-24"></div>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed font-light">
                Здесь вы можете разместить подробное описание вашего события. 
                Расскажите о целях, программе, спикерах и ключевых темах, которые будут обсуждаться.
              </p>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-light mt-8">
                Этот блок предназначен для лонгрида — развёрнутого текста, который познакомит 
                посетителей с деталями мероприятия. Добавьте информацию о формате, расписании, 
                и том, что участники получат после прохождения.
              </p>

              <div className="grid md:grid-cols-3 gap-8 mt-16 not-prose">
                <Card className="p-8 text-center space-y-4 border-none shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="Calendar" size={40} className="mx-auto text-primary" />
                  <h3 className="text-2xl font-light">Дата</h3>
                  <p className="text-muted-foreground">Укажите дату события</p>
                </Card>
                
                <Card className="p-8 text-center space-y-4 border-none shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="MapPin" size={40} className="mx-auto text-primary" />
                  <h3 className="text-2xl font-light">Место</h3>
                  <p className="text-muted-foreground">Онлайн или офлайн</p>
                </Card>
                
                <Card className="p-8 text-center space-y-4 border-none shadow-sm hover:shadow-md transition-shadow">
                  <Icon name="Users" size={40} className="mx-auto text-primary" />
                  <h3 className="text-2xl font-light">Участники</h3>
                  <p className="text-muted-foreground">Количество мест</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-light tracking-tight">
                Галерея
              </h2>
              <div className="h-px bg-border w-24"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "https://cdn.poehali.dev/projects/b63119d9-12df-4a7c-bfe8-992c2405ab9f/files/0643ddf5-1722-4453-9557-6c9c338cc0a0.jpg",
                "https://cdn.poehali.dev/projects/b63119d9-12df-4a7c-bfe8-992c2405ab9f/files/d0b21657-fc69-40b5-8cbf-8012fda0eb13.jpg",
                "https://cdn.poehali.dev/projects/b63119d9-12df-4a7c-bfe8-992c2405ab9f/files/7f83b956-546e-45a0-9ff7-73452e2fdd4d.jpg",
                "https://cdn.poehali.dev/projects/b63119d9-12df-4a7c-bfe8-992c2405ab9f/files/0643ddf5-1722-4453-9557-6c9c338cc0a0.jpg",
                "https://cdn.poehali.dev/projects/b63119d9-12df-4a7c-bfe8-992c2405ab9f/files/d0b21657-fc69-40b5-8cbf-8012fda0eb13.jpg",
                "https://cdn.poehali.dev/projects/b63119d9-12df-4a7c-bfe8-992c2405ab9f/files/7f83b956-546e-45a0-9ff7-73452e2fdd4d.jpg"
              ].map((image, index) => (
                <div
                  key={index}
                  className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={image} 
                    alt={`Gallery image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-light">Контакты</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-center gap-3">
                  <Icon name="Mail" size={20} />
                  <span>info@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-light">Соцсети</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Icon name="Linkedin" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t text-center text-muted-foreground text-sm">
            <p>© 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;