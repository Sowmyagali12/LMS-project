// src/data/CourseTopicList.js

const CourseTopicList = [
  {
    courseId: 'java-fullstack',
    topics: [
      {
        topicId: 'java-intro',
        topicTitle: 'Introduction to Java',
        videoLink: 'https://www.youtube.com/watch?v=JavaIntro',
        pdfLink: 'https://example.com/java-intro.pdf',
      },
      {
        topicId: 'spring-boot',
        topicTitle: 'Spring Boot Basics',
        videoLink: 'https://www.youtube.com/watch?v=SpringBoot',
        pdfLink: 'https://example.com/spring-boot.pdf',
      },
    ],
  },
  {
    courseId: 'python',
    topics: [
      {
        topicId: 'python-basics',
        topicTitle: 'Python Basics',
        videoLink: 'https://www.youtube.com/watch?v=PythonBasics',
        pdfLink: 'https://example.com/python-basics.pdf',
      },
      {
        topicId: 'django-framework',
        topicTitle: 'Django Framework',
        videoLink: 'https://www.youtube.com/watch?v=DjangoFramework',
        pdfLink: 'https://example.com/django.pdf',
      },
    ],
  },
  {
    courseId: 'ui-ux',
    topics: [
      {
        topicId: 'ux-principles',
        topicTitle: 'UX Principles',
        videoLink: 'https://www.youtube.com/watch?v=UXPrinciples',
        pdfLink: 'https://example.com/ux-principles.pdf',
      },
      {
        topicId: 'figma-design',
        topicTitle: 'Figma for UI Design',
        videoLink: 'https://www.youtube.com/watch?v=FigmaUI',
        pdfLink: 'https://example.com/figma-ui.pdf',
      },
    ],
  },
];

export default CourseTopicList;
