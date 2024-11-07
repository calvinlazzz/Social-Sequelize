const { Comment, Like, Post, Profile, User } = require("./index");
const { sequelize,Model,DataTypes, Sequelize } = require('./db/connection.js');




    // Write your tests here
    describe('Social Sequelize Test', () => {
        /**
         * Runs the code prior to all tests
         */
        beforeAll(async () => {
            // the 'sync' method will create tables based on the model class
            // by setting 'force:true' the tables are recreated each time the test suite is run
            await sequelize.sync({ force: true });
        });

        test("Can create a user", async () => {
            const user = await User.create({ username: 'user1', email: '@gmail.com' });
            expect(user.username).toBe('user1');
        });

        test("Can create a profile", async () => {
            const profile = await Profile.create({ bio: 'bio', profilePicture: 'profilePicture', birthday: 'birthday' });
            expect(profile.bio).toBe('bio');
        });

        test("Can create a post", async () => {
            const post = await Post.create({ title: 'new pic', body: 'content', createdAt: '11/2024' });
            expect(post.title).toBe('new pic');
            expect(post.body).toBe('content');
            expect(post.createdAt).toBe('11/2024');
        });
        test( "Can create a comment", async () => {
            const comment = await Comment.create({ body: 'comment', createdAt: '11/2024' });
            expect(comment.body).toBe('comment');
            expect(comment.createdAt).toBe('11/2024');
        })
        test("Can create a like", async () => {
            const like = await Like.create({reactionType: 'like', createdAt: '11/2024' });
            expect(like.reactionType).toBe('like');
        });

        test("User and Profile association", async () => {
            await sequelize.sync({ force: true });
            let user = await User.create({ username: 'user1', email: '@gmail.com' });
            let profile = await Profile.create({ bio: 'bio', profilePicture: 'profilePicture', birthday: 'birthday' });

            await user.setProfile(profile);
            const userProfile = await user.getProfile();
            expect(userProfile instanceof Profile).toBe(true);
        });

        test("User and Post association", async () => {
            await sequelize.sync({ force: true });

            let user = await User.create({ username: 'user1', email: '@gmail.com' });
            const post = await Post.create({ title: 'new pic', body: 'content', createdAt: '11/2024' });

            await user.addPost(post);
            const userPosts = await user.getPosts();
            expect(userPosts.length).toBe(1);
        });

        test("Post and Comment association", async () => {
            await sequelize.sync({ force: true });

            const post = await Post.create({ title: 'new pic', body: 'content', createdAt: '11/2024' });
            const comment = await Comment.create({ body: 'comment', createdAt: '11/2024' });

            await post.addComment(comment);
            const postComments = await post.getComments();
            expect(postComments.length).toBe(1);
        });

        test("User and Like association", async () => {
            await sequelize.sync({ force: true });
            let user = await User.create({ username: 'user1', email: '@gmail.com' });
            const like = await Like.create({reactionType: 'like', createdAt: '11/2024' });
            const like2 = await Like.create({reactionType: 'like', createdAt: '12/2024' });
            await user.addLike(like);
            await user.addLike(like2);
            const userLikes = await user.getLikes();
            expect(userLikes.length).toBe(2);

           
        });

        test("Like and User association", async () => {
            await sequelize.sync({ force: true });
            let like = await Like.create({reactionType: 'like', createdAt: '11/2024' });    
            let user = await User.create({ username: 'user1', email: '@gmail.com' });
            let user2 = await User.create({ username: 'user2', email: '@gmail.com' });
            await like.addUser(user);
            await like.addUser(user2);
            const likeUsers = await like.getUsers();
            expect(likeUsers.length).toBe(2);
        });

     
    });
