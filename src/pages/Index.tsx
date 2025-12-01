import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
              
              <div className="my-12 not-prose max-w-sm mx-auto">
                <Dialog>
                  <DialogTrigger asChild>
                    <div className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer">
                      <img 
                        src="https://cdn.poehali.dev/files/41f05932-7a23-4424-9dbe-87fbe659f4c2.jpg" 
                        alt="Event illustration"
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src="https://cdn.poehali.dev/files/41f05932-7a23-4424-9dbe-87fbe659f4c2.jpg" 
                      alt="Event illustration"
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed font-light mt-8">
                Этот блок предназначен для лонгрида — развёрнутого текста, который познакомит 
                посетителей с деталями мероприятия. Добавьте информацию о формате, расписании, 
                и том, что участники получат после прохождения.
              </p>

              <div className="my-16 not-prose space-y-12">
                <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 md:p-16 border border-primary/10">
                  <div className="absolute top-8 left-8 text-6xl text-primary/20">"</div>
                  <div className="absolute bottom-8 right-8 text-6xl text-primary/20 rotate-180">"</div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light text-center relative z-10">
                    Текст рождается в тишине. Сначала это лишь смутное беспокойство где-то за грудиной, зуд в кончиках пальцев. 
                    Потом — первое слово. Оно, как семя, падает на чистый лист или мерцающий экран. За ним — второе, третье... 
                    Они сплетаются в предложения, предложения — в абзацы. Иногда они текут легко, как ручей по весне. 
                    Иногда приходится выковыривать их по букве, как камень из замшелой земли. Но когда процесс пошел, 
                    мир за окном исчезает. Остается только ритм, смысл и эта магия — превращение незримой мысли в видимые знаки, 
                    которые кто-то другой прочтет и, возможно, почувствует то же, что и ты. Текст — это мост, 
                    построенный в одиночку, но предназначенный для того, чтобы по нему прошел другой.
                  </p>
                </div>

                <div className="relative bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-12 md:p-16 border border-accent/10">
                  <div className="absolute top-8 left-8 text-6xl text-accent/20">"</div>
                  <div className="absolute bottom-8 right-8 text-6xl text-accent/20 rotate-180">"</div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light text-center relative z-10">
                    В каждом слове скрыта вселенная. Буквы складываются в символы, символы — в образы, образы — в миры. 
                    Писатель — не просто человек с ручкой или клавиатурой. Это архитектор реальностей, которых еще не существовало. 
                    Он берет пустоту и наполняет её смыслом. Каждый абзац — это кирпичик в здании, которое будет стоять 
                    долго после того, как автор уйдет. Слова переживут нас. Они будут жить в головах читателей, 
                    порождая новые мысли, новые чувства, новые миры.
                  </p>
                </div>

                <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 md:p-16 border border-primary/10">
                  <div className="absolute top-8 left-8 text-6xl text-primary/20">"</div>
                  <div className="absolute bottom-8 right-8 text-6xl text-primary/20 rotate-180">"</div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light text-center relative z-10">
                    Редактирование — это вторая жизнь текста. Черновик всегда несовершенен. Он похож на глыбу мрамора, 
                    из которой скульптор высекает статую. Убрать лишнее, отшлифовать грубые края, найти ту самую фразу, 
                    которая зазвучит правильно. Иногда приходится убить своих любимых. Удалить красивые, но ненужные 
                    предложения, которые тормозят повествование. Это больно. Но текст должен дышать. Он должен течь, 
                    как река — без запруд и лишних камней.
                  </p>
                </div>

                <div className="relative bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-12 md:p-16 border border-accent/10">
                  <div className="absolute top-8 left-8 text-6xl text-accent/20">"</div>
                  <div className="absolute bottom-8 right-8 text-6xl text-accent/20 rotate-180">"</div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light text-center relative z-10">
                    Страх чистого листа — знаком каждому, кто пишет. Этот гнетущий момент, когда курсор мигает в пустоте, 
                    а в голове — ничего. Но стоит написать первую строчку — любую, даже плохую — и механизм запускается. 
                    Слова начинают притягивать друг друга, как магниты. Появляется импульс, движение, жизнь. 
                    Главное — начать. А дальше текст сам поведет тебя туда, куда нужно. Он умнее, чем кажется.
                  </p>
                </div>

                <div className="relative bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-12 md:p-16 border border-primary/10">
                  <div className="absolute top-8 left-8 text-6xl text-primary/20">"</div>
                  <div className="absolute bottom-8 right-8 text-6xl text-primary/20 rotate-180">"</div>
                  <p className="text-lg md:text-xl text-foreground/90 leading-relaxed font-light text-center relative z-10">
                    Читатель — это соавтор. Без него текст мертв. Он оживает только тогда, когда кто-то пробегает глазами 
                    по строкам и в его голове начинают разворачиваться образы. Писатель задает траекторию, но каждый читатель 
                    проходит по ней по-своему. Кто-то найдет в тексте то, чего автор не закладывал. Кто-то пропустит важное. 
                    Но это и есть магия — текст принадлежит всем и никому одновременно. Он живет своей жизнью, независимо 
                    от создателя.
                  </p>
                </div>
              </div>

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
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div
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
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl">
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </DialogContent>
                </Dialog>
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