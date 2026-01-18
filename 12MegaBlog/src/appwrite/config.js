import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
client = new Client();
databases;
bucket;

constructor() {
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
}

// CREATE POST
async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
    return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // using slug as document ID
        {
        title,
        content,
        featureImage,
        status,
        userId,
        }
    );
    } catch (error) {
    console.log("Appwrite Services :: createPost :: error", error);
    return false;
    }
}

// UPDATE POST
async updatePost(slug, { title, content, featureImage, status }) {
    try {
    return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
        title,
        content,
        featureImage,
        status,
        }
    );
    } catch (error) {
    console.log("Appwrite Services :: updatePost :: error", error);
    }
}

// DELETE POST
async deletePost(slug) {
    try {
    await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
    );
    return true;
    } catch (error) {
    console.log("Appwrite Services :: deletePost :: error", error);
    return false;
    }
}

// GET SINGLE POST
async getPost(slug) {
    try {
    return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
    );
    } catch (error) {
    console.log("Appwrite Service :: getPost :: error", error);
    return false;
    }
}

// GET ALL POSTS
async getPosts(queries = [Query.equal("status", "active")]) {
    try {
    return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
    );
    } catch (error) {
    console.log("Appwrite Service :: getPosts :: error", error);
    return false;
    }
}

// UPLOAD FILE
async uploadFile(file) {
    try {
    return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
    );
    } catch (error) {
    console.log("Appwrite Service :: uploadFile :: error", error);
    return false;
    }
}

// DELETE FILE
async deleteFile(fileId) {
    try {
    await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
    return true;
    } catch (error) {
    console.log("Appwrite Service :: deleteFile :: error", error);
    return false;
    }
}

// FILE PREVIEW
getFilePreview(fileId) {
    return this.bucket.getFilePreview(conf.appwriteBucketId, fileId);
}
}

const service = new Service();
export default service;



// import conf from '../conf.js';
// import { Client,ID, Databases, Storage, Query} from "appwrite";

// export class Service{

//     client = new Client();
//     databases;
//     bucket;

//     constructor(){
//         this.client
//             .setEndpoint(conf.appwriteUrl)
//             .setProject(conf.appwriteProjectId);

//             this.databases = new Databases(this.client);

//             this.bucket  =new Storage(this.client);

//     }

//     async createPost({title,slug,content,featureImage,status,userId}){

//     }

//     async updatePost(slug,{title,content,featureImage,status}){
        
//         try {
//             return await this.databases.updateDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug,
//                 {
//                     title,
//                     content,
//                     featureImage,
//                     status,
//                 }
//             )
//         } catch (error) {
//             console.log("Appwrite Serevices :: UpdatePost :: error", error)
//         }
//     }

//     async deletePost(slug){
//         try {
//                 await this.databases.deleteDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             )

//             return true
//         } catch (error) {
//             console.log("Appwrite Services :: deletePost :: error ", error)
//             return false
//         }
//     }

//     async getPost(slug){
//         try {
//             return this.databases.getDocument(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 slug
//             )
//         } catch (error) {
//             console.log("Appwrite Service :: getPoat :: error",error)
//             return false
//         }
//     }

//     async getPosts(queries = [Query.equal("status", "active")]){
//         try {
//             return await this.databases.listDocuments(
//                 conf.appwriteDatabaseId,
//                 conf.appwriteCollectionId,
//                 queries
//             )
//         } catch (error) {
//             console.log("Appwrite Service :: getPosts :: error",error)
//             return false
//         }
//     }

//     // file upload service and delete service

//     async uploadFile(file){
//         try {
//             return await this.bucket.createFile(
//                 conf.appwriteBucketId,
//                 ID.unique(),
//                 file
//             )
//         } catch (error) {
//             console.log("Appwrite service :: uploadFile :: error", error)
//             return false
//         }
//     }

//     async deleteFile(fileId){
//         try {
//             await this.bucket.deleteFile(
//                 conf.appwriteBucketId,
//                 fileId
//             )
//             return true
//         } catch (error) {
//             console.log("Appwrite service :: deleteFile :: error", error)
//             return false
//         }
//     }

//     getFilePreview(fileId){
//         return this.bucket.getFilePreview(
//             conf.appwriteBucketId,
//             fileId
//         )
//     }
// }

// const service = new Service();
// export default service