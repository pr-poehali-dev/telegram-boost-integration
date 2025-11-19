import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [subscribersLink, setSubscribersLink] = useState('');
  const [viewsLink, setViewsLink] = useState('');
  const [subscribersCount, setSubscribersCount] = useState('');
  const [viewsCount, setViewsCount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubscribersSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      toast({
        title: "Заявка принята! 🎉",
        description: `Накрутка ${subscribersCount} подписчиков началась`,
      });
      setIsProcessing(false);
      setSubscribersLink('');
      setSubscribersCount('');
    }, 2000);
  };

  const handleViewsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      toast({
        title: "Заявка принята! 🎉",
        description: `Накрутка ${viewsCount} просмотров началась`,
      });
      setIsProcessing(false);
      setViewsLink('');
      setViewsCount('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0088cc] via-[#1a1f2c] to-[#229ED9] bg-200 animate-gradient">
      <nav className="border-b border-white/10 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Send" className="text-white" size={32} />
              <h1 className="text-2xl font-bold text-white">TeleBoost</h1>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                О сервисе
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Контакты
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Бесплатная накрутка
            <br />
            <span className="bg-gradient-to-r from-[#64B5F6] to-[#0EA5E9] bg-clip-text text-transparent">
              для Telegram
            </span>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Получите подписчиков и просмотры для вашего канала абсолютно бесплатно
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in hover:scale-105 transition-transform">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0088cc] to-[#64B5F6] flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} />
              </div>
              <CardTitle>Быстро</CardTitle>
              <CardDescription className="text-white/70">
                Накрутка начинается в течение 5 минут после заявки
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in hover:scale-105 transition-transform delay-100">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#229ED9] to-[#0EA5E9] flex items-center justify-center mb-4">
                <Icon name="Shield" size={24} />
              </div>
              <CardTitle>Безопасно</CardTitle>
              <CardDescription className="text-white/70">
                Используем только проверенные методы продвижения
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white animate-fade-in hover:scale-105 transition-transform delay-200">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#64B5F6] to-[#0088cc] flex items-center justify-center mb-4">
                <Icon name="Gift" size={24} />
              </div>
              <CardTitle>Бесплатно</CardTitle>
              <CardDescription className="text-white/70">
                100% бесплатная накрутка без скрытых платежей
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <Card className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg border-white/20 animate-fade-in animate-pulse-glow">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Выберите услугу</CardTitle>
            <CardDescription className="text-white/70">
              Укажите ссылку на ваш канал и количество
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="subscribers" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/5">
                <TabsTrigger value="subscribers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#0088cc] data-[state=active]:to-[#64B5F6]">
                  <Icon name="Users" size={18} className="mr-2" />
                  Подписчики
                </TabsTrigger>
                <TabsTrigger value="views" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#229ED9] data-[state=active]:to-[#0EA5E9]">
                  <Icon name="Eye" size={18} className="mr-2" />
                  Просмотры
                </TabsTrigger>
              </TabsList>

              <TabsContent value="subscribers" className="space-y-4 mt-6">
                <form onSubmit={handleSubscribersSubmit} className="space-y-4">
                  <div>
                    <label className="text-white mb-2 block">Ссылка на канал</label>
                    <Input
                      type="url"
                      placeholder="https://t.me/your_channel"
                      value={subscribersLink}
                      onChange={(e) => setSubscribersLink(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="text-white mb-2 block">Количество подписчиков</label>
                    <Input
                      type="number"
                      placeholder="100"
                      min="10"
                      max="1000"
                      value={subscribersCount}
                      onChange={(e) => setSubscribersCount(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-[#0088cc] to-[#64B5F6] hover:from-[#0077bb] hover:to-[#5AA4E5] text-white font-semibold py-6 text-lg"
                  >
                    {isProcessing ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" />
                        Обработка...
                      </>
                    ) : (
                      <>
                        <Icon name="Rocket" className="mr-2" />
                        Получить подписчиков бесплатно
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="views" className="space-y-4 mt-6">
                <form onSubmit={handleViewsSubmit} className="space-y-4">
                  <div>
                    <label className="text-white mb-2 block">Ссылка на пост</label>
                    <Input
                      type="url"
                      placeholder="https://t.me/your_channel/123"
                      value={viewsLink}
                      onChange={(e) => setViewsLink(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <div>
                    <label className="text-white mb-2 block">Количество просмотров</label>
                    <Input
                      type="number"
                      placeholder="500"
                      min="50"
                      max="5000"
                      value={viewsCount}
                      onChange={(e) => setViewsCount(e.target.value)}
                      required
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-gradient-to-r from-[#229ED9] to-[#0EA5E9] hover:from-[#1A8DC8] hover:to-[#0D94D8] text-white font-semibold py-6 text-lg"
                  >
                    {isProcessing ? (
                      <>
                        <Icon name="Loader2" className="mr-2 animate-spin" />
                        Обработка...
                      </>
                    ) : (
                      <>
                        <Icon name="TrendingUp" className="mr-2" />
                        Получить просмотры бесплатно
                      </>
                    )}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-white/70">Довольных клиентов</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">500K+</div>
              <div className="text-white/70">Подписчиков накручено</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">2M+</div>
              <div className="text-white/70">Просмотров добавлено</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/70">Работаем круглосуточно</div>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-white/10 backdrop-blur-sm bg-black/20 mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-white/70">
          <p>© 2024 TeleBoost. Бесплатная накрутка для Telegram</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
