---
layout: post
title: "Pele Showcase Demo: High-Performance Themeable Diagrams"
date: 2026-10-28 12:00:00 -0500
categories: [Engineering, Architecture]
tags: [pele, mermaid, svg, dev-tools]
description: "Interactive demo showcasing all diagram capabilities, responsive layouts, zoom controls, and theme adaptation powered by Pele."
toc: true
---

> **Important note:** This is a local demo showcasing how **Pele** renders Mermaid diagrams as lightweight, theme-reactive SVGs in Jekyll Chirpy. It serves as an architectural and visual reference for future technical publications.

---

## 1. Flowchart with Subgraphs and Decision Nodes

Flowcharts in Pele support directional layouts (`LR`, `TD`), nested subgraphs, diamond decisions, and edge labels.

```mermaid
flowchart LR
    subgraph Ingestion["1. Ingestion Layer"]
        A["Client App<br/>(Web / Mobile)"] --> B["API Gateway<br/>(Rate Limiting & Auth)"]
    end

    subgraph Processing["2. Event Processing Pipeline"]
        direction TB
        C{"Payload Valid?"}
        D["Kafka Event Bus<br/>(Partitioned Stream)"]
        E["DLQ / Reject Log<br/>(Audit Service)"]
        
        B --> C
        C -->|Valid| D
        C -->|Invalid| E
    end

    subgraph Storage["3. Persistence & Analytics"]
        direction LR
        F[("PostgreSQL<br/>(Primary Store)")]
        G[("ClickHouse<br/>(OLAP Analytics)")]
        
        D --> F
        D --> G
    end
```

---

## 2. Interactive Zoom and Pan (Large Diagram)

When a diagram is dense or scaled down to fit the container width, Pele automatically mounts interactive **Zoom In (+)**, **Zoom Out (-)**, and **Reset** controls in the top-right corner. You can also drag to pan or use the mouse wheel.

```mermaid
flowchart TB
    subgraph Edge["Edge Infrastructure"]
        DNS["Cloudflare DNS"] --> CDN["Global Edge CDN"]
        CDN --> WAF["Web Application Firewall"]
    end

    subgraph Cluster["Kubernetes Microservices Mesh"]
        WAF --> Ingress["Traefik Ingress Controller"]
        
        subgraph CoreServices["Core Business Domain"]
            Ingress --> Auth["Authentication Service"]
            Ingress --> Order["Order Management"]
            Ingress --> Billing["Billing & Payments"]
            Ingress --> Notif["Notification Engine"]
        end

        subgraph DataBackbone["Distributed Data Backbone"]
            Order --> Redis[("Redis Distributed Cache")]
            Order --> Kafka{{"Apache Kafka Cluster"}}
            Billing --> Kafka
            Kafka --> Consumer1["Analytics Consumer"]
            Kafka --> Consumer2["Audit Event Streamer"]
        end
        
        subgraph Databases["Persistent Storage Tier"]
            Order --> DB1[("CockroachDB Primary")]
            Billing --> DB2[("PostgreSQL Ledger")]
            Consumer1 --> OLAP[("ClickHouse Warehouse")]
        end
    end

    Cluster --> Observability["Datadog / Prometheus Monitoring"]
```

---

## 3. Sequence Diagram

Sequence diagrams feature lifelines, synchronous/asynchronous calls, activations, and note boxes.

```mermaid
sequenceDiagram
    autonumber
    actor User as Engineer
    participant Client as Web Client
    participant Auth as Auth Server (OAuth2)
    participant API as Spring Boot API
    participant DB as PostgreSQL DB

    User->>Client: Submit Login Credentials
    Client->>Auth: POST /oauth/token
    activate Auth
    Auth-->>Client: JWT Bearer Access Token
    deactivate Auth

    User->>Client: Request Account Dashboard
    Client->>API: GET /api/v1/accounts (Authorization: Bearer)
    activate API
    API->>API: Validate Token Signature & Claims
    API->>DB: Query User Records
    activate DB
    DB-->>API: ResultSet Records
    deactivate DB
    API-->>Client: 200 OK (JSON Payload)
    deactivate API
    Client-->>User: Render Dashboard View
```

---

## 4. State Diagram (`stateDiagram-v2`)

State diagrams model lifecycles, composite states, transitions, and fork/join behaviors.

```mermaid
stateDiagram-v2
    [*] --> Idle

    state Processing {
        [*] --> Validating
        Validating --> Authorized: Checks Pass
        Validating --> Failed: Constraint Violation
        Authorized --> Settling: Execute Transaction
        Settling --> Completed: Ledger Updated
    }

    Idle --> Processing: New Payment Intent
    Processing --> Succeeded: Completed
    Processing --> Declined: Failed
    Declined --> [*]
    Succeeded --> Archived
    Archived --> [*]
```

---

## 5. Class Diagram

Class diagrams allow documenting interfaces, abstract classes, field visibility, and relationships (inheritance, association, composition).

```mermaid
classDiagram
    class ApplicationContext {
        <<interface>>
        +getBean(name: String) Object
        +containsBean(name: String) boolean
        +close() void
    }

    class AbstractApplicationContext {
        <<abstract>>
        -beanFactory: DefaultListableBeanFactory
        +refresh() void
        #prepareBeanFactory() void
    }

    class AnnotationConfigApplicationContext {
        -annotatedClasses: Set~Class~
        +register(componentClasses: Class...) void
        +scan(basePackages: String...) void
    }

    class BeanFactory {
        <<interface>>
        +getBean(name: String) Object
    }

    BeanFactory <|-- ApplicationContext
    ApplicationContext <|-- AbstractApplicationContext
    AbstractApplicationContext <|-- AnnotationConfigApplicationContext
```

---

## 6. Git Graph

Pele renders Git branching workflows cleanly with commits, tags, and merges.

```mermaid
gitGraph
    commit id: "Initial setup"
    commit id: "Add Astro portfolio"
    branch feature/pele-integration
    checkout feature/pele-integration
    commit id: "Add pele.html include"
    commit id: "Configure theme variables"
    checkout main
    merge feature/pele-integration id: "Merge Pele engine"
    commit id: "Tag v1.0.0" tag: "v1.0.0"
```

---

## 7. Mindmap

Mindmaps provide radial or hierarchical exploration of concepts and topics.

```mermaid
mindmap
  root((Software Architecture))
    Backend Engineering
      Spring Boot
        Bean Lifecycle
        Reactive WebFlux
        Spring Security
      Database Systems
        PostgreSQL
        Redis Cache
    Frontend Engineering
      Astro 5
        Island Architecture
        Static Site Generation
      Jekyll Chirpy
        Markdown Pipelines
        Pele Vector SVGs
    DevOps & Cloud
      Docker & Containers
      GitHub Actions CI/CD
```

---

## 8. Kanban Board

Kanban boards visualize tasks through workflows with custom priorities and tags.

```mermaid
kanban
  Backlog
    [Performance Audit]
    [AdSense Local Stub Optimization]
  In Progress
    [Pele SVG Engine Integration]
    [Spring Bean Lifecycle Publication]
  Testing
    [Theme Reactivity Light/Dark]
    [Mobile Viewport Responsiveness]
  Done
    [Chirpy 7.6.0 Verification]
    [Astro 7.2.0 Assessment]
```

---

## 9. C4 Architecture Container Diagram

C4 diagrams illustrate software systems at container and component boundaries.

```mermaid
C4Container
    title Container Diagram for Cloud Banking System

    Person(customer, "Banking Customer", "A customer of the bank with personal accounts.")
    
    System_Boundary(c1, "Internet Banking System") {
        Container(spa, "Single-Page Application", "JavaScript & TypeScript", "Provides banking functionality via browser.")
        Container(api, "API Gateway", "Spring Cloud Gateway", "Handles authentication, routing, and rate limiting.")
        Container(backend, "Core Banking Services", "Java 25 & Spring Boot", "Implements business logic and account transactions.")
        ContainerDb(db, "Transactional Database", "PostgreSQL", "Stores customer records, transactions, and audit logs.")
    }

    Rel(customer, spa, "Visits using HTTPS")
    Rel(spa, api, "Makes API calls to", "JSON/HTTPS")
    Rel(api, backend, "Routes authorized traffic to", "gRPC")
    Rel(backend, db, "Reads & writes transactions to", "JDBC/SSL")
```

---

## 10. Theming & Dark/Light Mode Adaptability

Toggle the theme button (sun/moon) on the top navbar. You will observe:

1. **Instant Color Transitions (0 ms):** SVG colors, background surfaces, connector lines, and text adapt immediately via CSS variables without reloading or re-running scripts.
2. **Semantic Highlights:** Accents, borders, and error states harmonize with Chirpy's `--card-bg`, `--text-color`, and `--main-border-color`.
