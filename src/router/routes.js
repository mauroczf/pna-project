
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/livros', component: () => import('pages/Livros.vue') },
      { path: '/produtos', component: () => import('pages/Produtos.vue') },
      { path: '/cadastrarprodutos', component: () => import('pages/CadastrarProdutos.vue') },
      { path: '/cadastrarlivros', component: () => import('pages/CadastrarLivros.vue') },
      { path: '/editarprodutos', component: () => import('pages/EditarProdutos.vue') },
      { path: '/editarlivros', component: () => import('pages/EditarLivros.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
