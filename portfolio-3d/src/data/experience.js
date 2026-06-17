export const experienceData = [
    {
        id: 1,
        title: 'Cloud Engineer & DevOps Engineer',
        company: 'Assurify Technologies Pvt Ltd',
        location: 'Chennai, India',
        period: 'January 2025 – Present',
        current: true,
        responsibilities: [
            'Consolidated 25+ client-facing Django applications onto a shared Azure Kubernetes Service (AKS) cluster, eliminating per-app VM overhead and cutting provisioning time by 70%.',
            'Engineered end-to-end CI/CD pipelines with GitHub Actions and Azure DevOps — automating Docker builds, ACR pushes, and Kubernetes rolling deployments — slashing release time by 60% and eliminating environment-specific failures.',
            'Lifted production uptime to 99%+ by instrumenting workloads with Prometheus scraping and Azure Monitor alerting, enabling proactive issue resolution before user impact.',
            'Hardened cloud security across 25+ applications by deploying Azure Front Door with OWASP WAF rules, enforcing 100% HTTPS/SSL coverage, and integrating SSO across all customer-facing apps.',
            'Executed zero-downtime DNS migration of 20+ production domains from AWS Route53 to Azure DNS; automated SSL certificate provisioning via cert-manager with Let\'s Encrypt.',
            'Delivered the Warranty & Service Management Platform on GCP — deploying 5 production Django apps with multi-role RBAC and a RAG-based AI chatbot using GKE, Cloud Run, and Vertex AI.',
            'Standardized deployment patterns by authoring SOPs and runbooks for 25+ applications, cutting new-app onboarding time by ~50% and reducing cross-team coordination overhead.',
        ],
    },
    {
        id: 2,
        title: 'Cloud Engineer (Internship)',
        company: 'Besant Technologies',
        location: 'Chennai, India',
        period: 'June 2024 – December 2024',
        current: false,
        responsibilities: [
            'Architected multi-tier AWS environments (EC2, S3, RDS, VPC) with subnet segmentation, NAT routing, and hardened security groups for production Django workloads.',
            'Built Jenkins CI/CD pipelines automating build, test, and deployment workflows; containerized applications with Docker for portability across dev, staging, and production environments.',
            'Configured Nginx reverse proxy and Gunicorn WSGI on Linux (Ubuntu/RHEL) for production-grade Django hosting; maintained deployment SOPs and runbooks.',
            'Developed cloud-based solutions using AWS and Python to automate network installation engineering and real-time telemetry data collection and visualization.',
            'Consulted cross-functional teams to accelerate cloud-technology adoption and architect scalable cloud solutions across the organisation.',
        ],
    },
];
