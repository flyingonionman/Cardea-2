import graphene
from graphene_django import DjangoObjectType

from assessment.jobs.models import Lists, Job

class ListType(DjangoObjectType):
    class Meta:
        model = Lists

class JobType(DjangoObjectType):
    class Meta:
        model = Job


class Query(graphene.ObjectType):
    all_jobs = graphene.List(JobType)
    all_lists =  graphene.List(ListType)
    job = graphene.Field(JobType, id=graphene.Int(), Company= graphene.String())
    listoflist = graphene.Field( graphene.List(ListType), Name = graphene.List(graphene.String))

    def resolve_all_jobs(root, info):
        # We can easily optimize query count in the resolve method
        return Job.objects.all()

    def resolve_all_lists(root, info):
        # We can easily optimize query count in the resolve method
        return Lists.objects.all()

    def resolve_job(root,info, id=None, Company=None):
        if id is not None:
            return Job.objects.get(pk=id)
        return None

    def resolve_listoflist(root,info, Name=None):
        if Name == "" :
            return None
        if Name is not None:
            test =[]
            for namer in Name:
                test.append(Lists.objects.get(Name= namer))
            return test
        return None

schema = graphene.Schema(query=Query)


