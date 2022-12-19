import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/coffee-baiter/blog',
    component: ComponentCreator('/coffee-baiter/blog', 'd23'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/archive',
    component: ComponentCreator('/coffee-baiter/blog/archive', '197'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/first-blog-post',
    component: ComponentCreator('/coffee-baiter/blog/first-blog-post', 'ab9'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/long-blog-post',
    component: ComponentCreator('/coffee-baiter/blog/long-blog-post', '40d'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/mdx-blog-post',
    component: ComponentCreator('/coffee-baiter/blog/mdx-blog-post', '0ca'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/tags',
    component: ComponentCreator('/coffee-baiter/blog/tags', 'd14'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/tags/docusaurus',
    component: ComponentCreator('/coffee-baiter/blog/tags/docusaurus', 'f91'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/tags/facebook',
    component: ComponentCreator('/coffee-baiter/blog/tags/facebook', 'db7'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/tags/hello',
    component: ComponentCreator('/coffee-baiter/blog/tags/hello', '817'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/tags/hola',
    component: ComponentCreator('/coffee-baiter/blog/tags/hola', '713'),
    exact: true
  },
  {
    path: '/coffee-baiter/blog/welcome',
    component: ComponentCreator('/coffee-baiter/blog/welcome', '419'),
    exact: true
  },
  {
    path: '/coffee-baiter/markdown-page',
    component: ComponentCreator('/coffee-baiter/markdown-page', '5c1'),
    exact: true
  },
  {
    path: '/coffee-baiter/p1',
    component: ComponentCreator('/coffee-baiter/p1', '6d3'),
    exact: true
  },
  {
    path: '/coffee-baiter/docs',
    component: ComponentCreator('/coffee-baiter/docs', '652'),
    routes: [
      {
        path: '/coffee-baiter/docs/category/tutorial---basics',
        component: ComponentCreator('/coffee-baiter/docs/category/tutorial---basics', 'd41'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/category/tutorial---extras',
        component: ComponentCreator('/coffee-baiter/docs/category/tutorial---extras', '504'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/intro',
        component: ComponentCreator('/coffee-baiter/docs/intro', '01c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-basics/congratulations', '4c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-basics/create-a-blog-post', 'e4a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-basics/create-a-document', 'c6c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-basics/create-a-page', '55e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-basics/deploy-your-site', '3d1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-basics/markdown-features', '06e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-extras/manage-docs-versions', '487'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/coffee-baiter/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/coffee-baiter/docs/tutorial-extras/translate-your-site', 'adc'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/coffee-baiter/',
    component: ComponentCreator('/coffee-baiter/', '4bc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
