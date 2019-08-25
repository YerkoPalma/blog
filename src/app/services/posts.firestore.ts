import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { FirestoreService } from './firestore.service';

@Injectable({
    providedIn: 'root'
})
export class PostsFirestore extends FirestoreService<Post> {
    protected basePath = 'posts';

}
