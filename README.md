
## M3TASERVE website

### Getting started

* Install dependencies
```bash
npm install
```

* Setup `.env.local` configuration file
```bash
HUGO_PARAMS_SupabaseUrl="YOUR_PROJECT_URL"
HUGO_PARAMS_SupabaseKey="YOUR_PROJECT_KEY"
```

* Start development server
```bash
npm run start
```

* Supabase configuration:

1. create Table 'results' in 'Table editor'

| Name | Type | Value | Primary |
| ---- | ---- | ----- | ------- |
| id | int8 |  | x |
| created_at | timestampz | now() |  |
| created_by | uuid (foreign_key 'id' from `users`) |  |  |
| number | int8 |  |  |
| type | text |  |  |

2. enable RLS

| Target | Name | Role | CHECK |
| ------ | ---- | ---- | ----- |
| INSERT | Enable insert for authenticated users only | 'authenticated' | (uid() = created_by) |
| SELECT | Enable select for authenticated users only | 'authenticated' | (uid() = created_by) |

3. site security in 'Authentication'
  * URL Configuration (example for DEV with 'localhost:1313')
    * Site URL: http://localhost:1313/
    * Redirect URLs: http://localhost:1313/password

---

Dependencies:
  - [Supabase](https://app.supabase.com/)
  - [Netlify](https://docs.netlify.com/)
  - [Hugo](https://gohugo.io/documentation/)
  - [Doks](https://getdoks.org/)
  - [AlpineJS](https://alpinejs.dev/)

