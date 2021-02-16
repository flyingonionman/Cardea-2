import graphene
from graphene_django import DjangoObjectType

from assessment.jobs.models import Lists, Job

class ListType(DjangoObjectType):
    class Meta:
        model = Lists
        fields = ("id", "Name", "Description", "Image", "Curator")

class JobType(DjangoObjectType):
    test = graphene.List(ListType)
    @graphene.resolve_only_args
    def resolve_authors(self):
        return self.test.all()

    class Meta:
        model = Job
        fields = ("id", "JobTitle", "Company", "Lists")


class Query(graphene.ObjectType):
    all_jobs = graphene.List(JobType)
    all_lists =  graphene.List(ListType)
    def resolve_all_jobs(root, info):
        # We can easily optimize query count in the resolve method
        return Job.objects.all()

    def resolve_all_lists(root, info):
        # We can easily optimize query count in the resolve method
        return Lists.objects.all()



schema = graphene.Schema(query=Query)


