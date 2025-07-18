# 🚀 NestJS GraphQL GitHub API

This project is a modern **NestJS-based GraphQL API** designed to fetch GitHub user repository information.

## 📋 Features

- ✅ **GraphQL API** - Modern and flexible data querying
- ✅ **GitHub API Integration** - Real-time repository information
- ✅ **TypeScript** - Type safety and modern JavaScript support
- ✅ **Modular Architecture** - Easy maintenance and scalability
- ✅ **NestJS Framework** - Robust and scalable backend architecture

## 🛠️ Technologies

- **NestJS** - Progressive Node.js framework
- **GraphQL** - Integrated with Apollo Server
- **TypeScript** - Type safety
- **GitHub API** - For fetching repository data
- **pnpm** - Fast and efficient package manager

## 🏗️ Project Structure

```
src/
├── app.module.ts           # Main application module
├── main.ts                 # Application entry point
├── schema.gql             # GraphQL schema file
└── git/                   # Git/GitHub module
    ├── entities/          # GraphQL entities
    │   └── repo.entity.ts # Repository entity
    ├── providers/         # Data providers
    │   ├── git.provider.ts
    │   ├── github.provider.ts
    │   └── mock.provider.ts
    ├── git.module.ts      # Git module
    ├── git.resolver.ts    # GraphQL resolvers
    └── git.service.ts     # Business logic service
```

## 🚀 Installation

### Requirements

- Node.js (v18 or higher)
- pnpm

### Steps

1. **Clone the project:**

```bash
git clone <repository-url>
cd nest-graphql-github
```

2. **Install dependencies:**

```bash
pnpm install
```

3. **Start the development server:**

```bash
pnpm run start:dev
```

4. **Access GraphQL Playground:**

```
http://localhost:3000/graphql
```

## 📖 Usage

### GraphQL Queries

#### Get all repositories for a user

```graphql
query GetUserRepos {
  repos(username: "octocat") {
    id
    name
    full_name
    description
    html_url
    private
    fork
    language
    stargazers_count
    forks_count
    created_at
    updated_at
    owner {
      login
      avatar_url
      html_url
    }
    license {
      name
      key
      spdx_id
    }
    topics
    visibility
    default_branch
  }
}
```

#### Simple repository information

```graphql
query SimpleRepoInfo {
  repos(username: "octocat") {
    name
    description
    stargazers_count
    language
    html_url
  }
}
```

## 🔧 Development

### Available Commands

```bash
# Start development server
pnpm run start:dev

# Production build
pnpm run build
pnpm run start:prod

# Code formatting
pnpm run format

# Linting
pnpm run lint

# Tests
pnpm run test
pnpm run test:watch
pnpm run test:cov
pnpm run test:e2e
```

### GraphQL Schema Updates

The project automatically generates the GraphQL schema in the `src/schema.gql` file. Changes made to entities will automatically reflect in the schema.

## 📚 API Documentation

### Endpoints

- **GraphQL Playground**: `http://localhost:3000/graphql`
- **GraphQL API**: `http://localhost:3000/graphql`

### Main Query

#### `repos(username: String!): [Repo!]!`

Returns all public repositories for the specified user.

**Parameters:**

- `username` (String, required): GitHub username

**Returns:**

- List of repositories (see `Repo` entity for details)

## 🏛️ Architecture

### Layered Architecture

1. **Resolver Layer** (`git.resolver.ts`): Handles GraphQL queries
2. **Service Layer** (`git.service.ts`): Manages business logic
3. **Provider Layer** (`providers/`): Manages data sources

### Provider Pattern

- **GitProvider**: Base provider interface
- **GithubProvider**: GitHub API integration
- **MockProvider**: Mock data for testing and development

## 🔮 Future Features

- [ ] Authentication support
- [ ] Rate limiting
- [ ] Caching mechanism
- [ ] Repository detail information
- [ ] Commit history
- [ ] Issues and Pull Requests
- [ ] Search filters
- [ ] Pagination support

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

If you have any questions or suggestions, please feel free to open an issue.

---

⭐ **If you found this project helpful, don't forget to give it a star!**
