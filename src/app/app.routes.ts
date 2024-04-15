import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        title: "HOME",
        loadComponent: () => import ("./layouts/home/home.component").then(m => m.HomeComponent),
        children: [
            {
                path:"posts",
                loadComponent: () => import ("./components/posts/posts.component").then (m=> m.PostsComponent),
                title: "POSTS"
            }
        ]
    }
];
