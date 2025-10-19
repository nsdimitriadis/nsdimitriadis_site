export type TechnologyItem = {
  label: string;
  icon?: string; // path under /public
};

export const technologies: TechnologyItem[] = [
  { label: 'Python', icon: '/images/tech/python.svg' },
  { label: 'Dagster', icon: '/images/tech/dagster.svg' },
  { label: 'BigQuery', icon: '/images/tech/google-bigquery-logo-1.svg' },
  { label: 'GCP', icon: '/images/tech/google-cloud.svg' },
  { label: 'Airbyte', icon: '/images/tech/airbyte.svg' },
  { label: 'CI/CD', icon: '/images/tech/cicd.png' },
  { label: 'Apache Airflow', icon: '/images/tech/apache-airflow.svg' },
  { label: 'dbt', icon: '/images/tech/dbt.svg' },
  { label: 'PostgreSQL', icon: '/images/tech/postgresql.png' },
  { label: 'Docker', icon: '/images/tech/docker.svg' },
  { label: 'AWS', icon: '/images/tech/aws.png' },
  { label: 'Git', icon: '/images/tech/Git-Icon-1788C.svg' },
];
          