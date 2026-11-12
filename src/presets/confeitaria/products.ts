import type { Product } from "../../types";

export const confeitariaProducts: Product[] = [
  {
    id: 301,
    name: "Bolo Red Velvet com Brigadeiro de Ninho",
    category: "Bolos Festivos",
    price: 120.0,
    badge: "Destaque",
    image:
      "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800",
    description:
      "Massa aveludada com cacau nobre e toque de baunilha, recheada com cremoso brigadeiro de leite Ninho e finalizada com frutas vermelhas frescas.",
    sizes: ["1kg (serve 10)", "2kg (serve 20)", "3kg (serve 30)"],
    variations: [
      {
        name: "1kg (serve 10)",
        price: 120.0,
        image:
          "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800",
        description:
          "Bolo aro 15cm com 3 camadas de massa aveludada e 2 camadas fartas de brigadeiro de Ninho artesanal.",
      },
      {
        name: "2kg (serve 20)",
        price: 220.0,
        oldPrice: 240.0,
        image:
          "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?auto=format&fit=crop&q=80&w=800",
        description:
          "Bolo aro 20cm ideal para festas familiares. Acompanha topo decorado com morangos frescos e placas de chocolate branco.",
      },
      {
        name: "3kg (serve 30)",
        price: 310.0,
        image:
          "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&q=80&w=800",
        description:
          "Edição comemorativa aro 25cm com altura dupla, rendição extra de brigadeiros boleados no topo e caixa especial para transporte.",
      },
    ],
  },
  {
    id: 302,
    name: "Torta Holandesa Tradicional",
    category: "Tortas & Fatias",
    price: 85.0,
    badge: "Mais Vendido",
    image:
      "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
    description:
      "Clássico creme aveludado de baunilha com base amanteigada crocante, borda com biscoitos Calypso e generosa ganache de chocolate meio amargo nobre.",
    sizes: ["Pequena (8 fatias)", "Grande (16 fatias)"],
    variations: [
      {
        name: "Pequena (8 fatias)",
        price: 85.0,
        image:
          "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800",
        description:
          "Aro 18cm com peso aproximado de 900g. Perfeita para almoços de fim de semana e sobremesas em família.",
      },
      {
        name: "Grande (16 fatias)",
        price: 145.0,
        oldPrice: 160.0,
        image:
          "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800",
        description:
          "Aro 25cm com peso aproximado de 1.8kg. Camadas mais altas de creme e ganache dupla de chocolate belga.",
      },
    ],
  },
  {
    id: 303,
    name: "Cheesecake de Frutas Vermelhas",
    category: "Tortas & Fatias",
    price: 24.9,
    badge: "New York Style",
    image:
      "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800",
    description:
      "Autêntica receita nova-iorquina assada lentamente, com base de biscoito amanteigado, creme de cream cheese sedoso e calda artesanal de amora, mirtilo e morango.",
    sizes: ["Fatia Individual", "Inteira (12 fatias)"],
    variations: [
      {
        name: "Fatia Individual",
        price: 24.9,
        image:
          "https://images.unsplash.com/photo-1524351199678-941a58a3df50?auto=format&fit=crop&q=80&w=800",
        description:
          "Fatia generosa servida em embalagem individual com potinho extra de calda de frutas vermelhas.",
      },
      {
        name: "Inteira (12 fatias)",
        price: 135.0,
        oldPrice: 150.0,
        image:
          "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800",
        description:
          "Torta inteira aro 22cm coberta com generosa camada de frutas vermelhas frescas caramelizadas.",
      },
    ],
  },
  {
    id: 304,
    name: "Torta de Limão com Merengue Suíço",
    category: "Tortas & Fatias",
    price: 79.9,
    badge: "Artesanal",
    image:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
    description:
      "Massa sablé crocante que desmancha na boca, recheio cremoso com suco natural de limões sicilianos e cobertura de merengue maçaricado na hora.",
    sizes: ["Média (10 fatias)", "Grande (15 fatias)"],
    variations: [
      {
        name: "Média (10 fatias)",
        price: 79.9,
        image:
          "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
        description:
          "Torta aro 20cm com equilíbrio perfeito entre a acidez cítrica e o doce do merengue tostado.",
      },
      {
        name: "Grande (15 fatias)",
        price: 119.0,
        image:
          "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&q=80&w=800",
        description:
          "Torta aro 26cm com merengue trabalhado em bico pitanga e raspas frescas de limão taiti e siciliano.",
      },
    ],
  },
  {
    id: 305,
    name: "Caixa de Brigadeiros Gourmet",
    category: "Doces Finos",
    price: 48.0,
    badge: "Delícia",
    image:
      "https://images.unsplash.com/photo-1685708441240-14e2c711fc5c?q=80&w=1170&?auto=format&fit=crop&q=80&w=600",
    description:
      "Docinhos enrolados à mão preparados com cacau belga Callebaut, chocolate nobre e manteiga extra. Textura macia e ponto perfeito de colher.",
    sizes: [
      "Caixa com 12 un.",
      "Caixa com 24 un.",
      "Caixa Presente com 36 un.",
    ],
    variations: [
      {
        name: "Caixa com 12 un.",
        price: 48.0,
        image:
          "https://images.unsplash.com/photo-1685708441240-14e2c711fc5c?q=80&w=1170&?auto=format&fit=crop&q=80&w=600",
        description:
          "Sortimento com 4 brigadeiros Tradicionais 54%, 4 de Leite Ninho com Nutella e 4 de Pistache com raspas.",
      },
      {
        name: "Caixa com 24 un.",
        price: 88.0,
        oldPrice: 96.0,
        image:
          "https://images.unsplash.com/photo-1548848221-0c2e497ed557?auto=format&fit=crop&q=80&w=800",
        description:
          "6 sabores sortidos: Belga 54%, Caramelo Flor de Sal, Ninho com Nutella, Frutas Vermelhas, Churros e Nozes.",
      },
      {
        name: "Caixa Presente com 36 un.",
        price: 129.0,
        image:
          "https://images.unsplash.com/photo-1685708441240-14e2c711fc5c?q=80&w=1170&?auto=format&fit=crop&q=80&w=600",
        description:
          "Apresentação de luxo em caixa rígida com fita de cetim e seleção premium com os 8 sabores da casa.",
      },
    ],
  },
  {
    id: 306,
    name: "Macarons Sortidos (Caixa Presente)",
    category: "Doces Finos",
    price: 65.0,
    badge: "Especial",
    image:
      "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
    description:
      "Autênticos confeitos parisienses produzidos com 100% farinha de amêndoas puras, casquinha crocante e recheios sedosos de ganache importada.",
    sizes: ["Caixa com 6 un.", "Caixa com 12 un."],
    variations: [
      {
        name: "Caixa com 6 un.",
        price: 65.0,
        image:
          "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800",
        description:
          "6 sabores clássicos: Framboesa, Pistache Siciliano, Baunilha de Madagascar, Chocolate Intenso, Maracujá e Caramelo.",
      },
      {
        name: "Caixa com 12 un.",
        price: 118.0,
        oldPrice: 130.0,
        image:
          "https://images.unsplash.com/photo-1491821893533-80f535044695?auto=format&fit=crop&q=80&w=800",
        description:
          "Caixa presente premium com visor transparente contendo os 12 sabores da coleção do chef patissier.",
      },
    ],
  },
  {
    id: 307,
    name: "Mini Donuts Glaceados",
    category: "Doces Finos",
    price: 39.9,
    image:
      "https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&q=80&w=800",
    description:
      "Massa leve e fofinha fermentada lentamente, frita em óleo de algodão e finalizada com coberturas coloridas e confeitos crocantes.",
    sizes: ["Kit com 6 un.", "Kit Festa com 12 un."],
    variations: [
      {
        name: "Kit com 6 un.",
        price: 39.9,
        image:
          "https://images.unsplash.com/photo-1514517521153-1be72277b32f?auto=format&fit=crop&q=80&w=800",
        description:
          "Sortimento com 2 de chocolate clássico, 2 de morango silvestre glaceado e 2 de baunilha com granulado colorido.",
      },
      {
        name: "Kit Festa com 12 un.",
        price: 69.9,
        oldPrice: 79.8,
        image:
          "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800",
        description:
          "Caixa com 12 unidades sortidas incluindo recheios especiais de doce de leite artesanal e brigadeiro belga.",
      },
    ],
  },
];
