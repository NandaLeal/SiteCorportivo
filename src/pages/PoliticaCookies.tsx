import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cookie, Shield, Settings, BarChart3, Target, Info } from "lucide-react";

const PoliticaCookies = () => {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Necessários",
      description: "Permitem as funções básicas do site, como navegação e o acesso."
    },
    {
      icon: Settings,
      title: "Preferências",
      description: "Permitem que um website memorize as informações que mudam o comportamento ou o aspecto do website, como o seu idioma preferido ou a região em que se encontra."
    },
    {
      icon: BarChart3,
      title: "Estatísticas",
      description: "Permitem analisar a interação dos visitantes, recolhendo e divulgando informações."
    },
    {
      icon: Target,
      title: "Marketing",
      description: "Permitem exibir anúncios que sejam relevantes para editores e anunciantes."
    }
  ];

  const cookiesTable = [
    { empresa: "Distribuidora de Bebidas Cervantes", tipos: "Cookies de Preferências, Estatísticas" },
    { empresa: "Facebook (Meta)", tipos: "Cookies de Preferências, Estatísticas e Marketing" },
    { empresa: "Google Analytics", tipos: "Cookies de Preferências, Estatísticas e Marketing" },
    { empresa: "Google Search Console", tipos: "Cookies de Preferências, Estatísticas e Marketing" },
    { empresa: "RD Station", tipos: "Cookies de Preferências, Estatísticas e Marketing" },
    { empresa: "iMoview", tipos: "Cookies de Preferências e Estatísticas" }
  ];

  return (
    <>
      <Helmet>
        <title>Política de Cookies | Cervantes Distribuidora</title>
        <meta name="description" content="Saiba como a Cervantes Distribuidora utiliza cookies para melhorar sua experiência de navegação." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-brand-orange/10 via-background to-brand-red/5">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-brand-orange/20 rounded-full">
                  <Cookie className="h-12 w-12 text-brand-orange" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-heading">
                Política de Cookies
              </h1>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                Entenda como utilizamos cookies para melhorar sua experiência em nosso site
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-12">
              
              {/* O que são Cookies */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Info className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl font-bold text-foreground font-heading">O que são Cookies?</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Os cookies são pequenos ficheiros de texto que podem ser utilizados por websites para tornar a experiência do utilizador mais eficiente.
                  </p>
                  <p>
                    A lei diz que podemos armazenar cookies no seu dispositivo se forem estritamente necessários para o funcionamento deste site. Para todos os outros tipos de cookies precisamos da sua permissão (conforme Art. 7º, I, da Lei 13.709/2018 (LGPD) – Mediante o fornecimento de consentimento pelo titular).
                  </p>
                  <p>
                    Este site utiliza diferentes tipos de cookies. Alguns cookies são colocados por serviços independentes que aparecem nas nossas páginas.
                  </p>
                  <p>
                    Utilizamos cookies para personalizar conteúdo e anúncios, fornecer funcionalidades de redes sociais e analisar o nosso tráfego. Também partilhamos informações acerca da sua utilização do site com os nossos parceiros de redes sociais, de publicidade e de análise, que as podem combinar com outras informações que lhes forneceu ou recolhidas por estes a partir da sua utilização dos respetivos serviços.
                  </p>
                </div>
              </div>

              {/* Tipos de Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-foreground font-heading mb-8 text-center">
                  Tipos de Cookies
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {cookieTypes.map((cookie, index) => (
                    <div 
                      key={index}
                      className="bg-card rounded-xl p-6 shadow-sm border border-border hover:border-brand-orange/50 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-brand-orange/10 rounded-lg">
                          <cookie.icon className="h-5 w-5 text-brand-orange" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{cookie.title}</h3>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {cookie.description}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-center text-muted-foreground">
                  O nosso website apresenta no ato de seu acesso a possibilidade de escolher e consentir o uso dos respectivos tipos de cookies descritos anteriormente.
                </p>
              </div>

              {/* Controle de Cookies */}
              <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <Settings className="h-6 w-6 text-brand-orange" />
                  <h2 className="text-2xl font-bold text-foreground font-heading">Controle de Cookies</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Caso o Usuário não deseje que os cookies mencionados sejam utilizados durante a navegação do nosso website, é possível optar por recusar, desabilitar, ou apagar os registros de cookies através das configurações do navegador utilizado.
                  </p>
                  <p>
                    Chamamos a atenção para o fato de que, ao fazer isso, algumas áreas, ferramentas e funcionalidades poderão ser comprometidas, afetando, dessa forma, o correto funcionamento do website da Cervantes.
                  </p>
                  <p>
                    Por fim, é importante ressaltar que, caso os cookies sejam desabilitados, eles não são automaticamente excluídos do navegador, sendo necessário que esse processo seja feito de forma específica e manualmente por meio das configurações de exclusão/eliminação do navegador.
                  </p>
                  <p>
                    É ainda possível que o usuário se utilize do recurso de "aba privativa / aba anônima" de seu navegador, o qual poderá desabilitar o novo depósito de cookies na sessão, sem excluir os já ativos.
                  </p>
                </div>
              </div>

              {/* Tabela de Cookies */}
              <div>
                <h2 className="text-2xl font-bold text-foreground font-heading mb-8 text-center">
                  Cookies Coletados
                </h2>
                <div className="overflow-hidden rounded-xl border border-border">
                  <table className="w-full">
                    <thead className="bg-brand-orange/10">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Empresa / Parceiro
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">
                          Tipos de Cookies Coletados
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border bg-card">
                      {cookiesTable.map((row, index) => (
                        <tr key={index} className="hover:bg-muted/50 transition-colors">
                          <td className="px-6 py-4 text-sm text-foreground font-medium">
                            {row.empresa}
                          </td>
                          <td className="px-6 py-4 text-sm text-muted-foreground">
                            {row.tipos}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contato */}
              <div className="bg-gradient-to-r from-brand-orange/10 to-brand-red/10 rounded-2xl p-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Em caso de dúvidas sobre quem somos, como pode contactar-nos e como processamos os dados pessoais, consulte nossa{" "}
                  <a href="/privacidade" className="text-brand-orange hover:underline font-medium">
                    Política de Privacidade
                  </a>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Distribuidora de Bebidas Cervantes • Atualizado em Janeiro de 2025
                </p>
              </div>

            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default PoliticaCookies;
